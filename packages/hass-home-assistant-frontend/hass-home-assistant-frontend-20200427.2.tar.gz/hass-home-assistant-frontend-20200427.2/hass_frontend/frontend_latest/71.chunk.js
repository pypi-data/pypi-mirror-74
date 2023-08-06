(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/lit-html/directives/repeat.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-html/directives/repeat.js ***!
  \****************************************************/
/*! exports provided: repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
 // Helper functions for manipulating parts
// TODO(kschaaf): Refactor into Part API?

const createAndInsertPart = (containerPart, beforePart) => {
  const container = containerPart.startNode.parentNode;
  const beforeNode = beforePart === undefined ? containerPart.endNode : beforePart.startNode;
  const startNode = container.insertBefore(Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["createMarker"])(), beforeNode);
  container.insertBefore(Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["createMarker"])(), beforeNode);
  const newPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](containerPart.options);
  newPart.insertAfterNode(startNode);
  return newPart;
};

const updatePart = (part, value) => {
  part.setValue(value);
  part.commit();
  return part;
};

const insertPartBefore = (containerPart, part, ref) => {
  const container = containerPart.startNode.parentNode;
  const beforeNode = ref ? ref.startNode : containerPart.endNode;
  const endNode = part.endNode.nextSibling;

  if (endNode !== beforeNode) {
    Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(container, part.startNode, endNode, beforeNode);
  }
};

const removePart = part => {
  Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(part.startNode.parentNode, part.startNode, part.endNode.nextSibling);
}; // Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)


const generateMap = (list, start, end) => {
  const map = new Map();

  for (let i = start; i <= end; i++) {
    map.set(list[i], i);
  }

  return map;
}; // Stores previous ordered list of parts and map of key to index


const partListCache = new WeakMap();
const keyListCache = new WeakMap();
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * amd removals.
 *
 * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */

const repeat = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((items, keyFnOrTemplate, template) => {
  let keyFn;

  if (template === undefined) {
    template = keyFnOrTemplate;
  } else if (keyFnOrTemplate !== undefined) {
    keyFn = keyFnOrTemplate;
  }

  return containerPart => {
    if (!(containerPart instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"])) {
      throw new Error('repeat can only be used in text bindings');
    } // Old part & key lists are retrieved from the last update
    // (associated with the part for this instance of the directive)


    const oldParts = partListCache.get(containerPart) || [];
    const oldKeys = keyListCache.get(containerPart) || []; // New part list will be built up as we go (either reused from
    // old parts or created for new keys in this update). This is
    // saved in the above cache at the end of the update.

    const newParts = []; // New value list is eagerly generated from items along with a
    // parallel array indicating its key.

    const newValues = [];
    const newKeys = [];
    let index = 0;

    for (const item of items) {
      newKeys[index] = keyFn ? keyFn(item, index) : index;
      newValues[index] = template(item, index);
      index++;
    } // Maps from key to index for current and previous update; these
    // are generated lazily only when needed as a performance
    // optimization, since they are only required for multiple
    // non-contiguous changes in the list, which are less common.


    let newKeyToIndexMap;
    let oldKeyToIndexMap; // Head and tail pointers to old parts and new values

    let oldHead = 0;
    let oldTail = oldParts.length - 1;
    let newHead = 0;
    let newTail = newValues.length - 1; // Overview of O(n) reconciliation algorithm (general approach
    // based on ideas found in ivi, vue, snabbdom, etc.):
    //
    // * We start with the list of old parts and new values (and
    //   arrays of their respective keys), head/tail pointers into
    //   each, and we build up the new list of parts by updating
    //   (and when needed, moving) old parts or creating new ones.
    //   The initial scenario might look like this (for brevity of
    //   the diagrams, the numbers in the array reflect keys
    //   associated with the old parts or new values, although keys
    //   and parts/values are actually stored in parallel arrays
    //   indexed using the same head/tail pointers):
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [ ,  ,  ,  ,  ,  ,  ]
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
    //                                      item order
    //      newHead ^                 ^ newTail
    //
    // * Iterate old & new lists from both sides, updating,
    //   swapping, or removing parts at the head/tail locations
    //   until neither head nor tail can move.
    //
    // * Example below: keys at head pointers match, so update old
    //   part 0 in-place (no need to move it) and record part 0 in
    //   the `newParts` list. The last thing we do is advance the
    //   `oldHead` and `newHead` pointers (will be reflected in the
    //   next diagram).
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //      newHead ^                 ^ newTail
    //
    // * Example below: head pointers don't match, but tail
    //   pointers do, so update part 6 in place (no need to move
    //   it), and record part 6 in the `newParts` list. Last,
    //   advance the `oldTail` and `oldHead` pointers.
    //
    //         oldHead v              v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
    //                                      & newTail
    //         newHead ^              ^ newTail
    //
    // * If neither head nor tail match; next check if one of the
    //   old head/tail items was removed. We first need to generate
    //   the reverse map of new keys to index (`newKeyToIndexMap`),
    //   which is done once lazily as a performance optimization,
    //   since we only hit this case if multiple non-contiguous
    //   changes were made. Note that for contiguous removal
    //   anywhere in the list, the head and tails would advance
    //   from either end and pass each other before we get to this
    //   case and removals would be handled in the final while loop
    //   without needing to generate the map.
    //
    // * Example below: The key at `oldTail` was removed (no longer
    //   in the `newKeyToIndexMap`), so remove that part from the
    //   DOM and advance just the `oldTail` pointer.
    //
    //         oldHead v           v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
    //         newHead ^           ^ newTail
    //
    // * Once head and tail cannot move, any mismatches are due to
    //   either new or moved items; if a new key is in the previous
    //   "old key to old index" map, move the old part to the new
    //   location, otherwise create and insert a new part. Note
    //   that when moving an old part we null its position in the
    //   oldParts array if it lies between the head and tail so we
    //   know to skip it when the pointers get there.
    //
    // * Example below: neither head nor tail match, and neither
    //   were removed; so find the `newHead` key in the
    //   `oldKeyToIndexMap`, and move that old part's DOM into the
    //   next head position (before `oldParts[oldHead]`). Last,
    //   null the part in the `oldPart` array since it was
    //   somewhere in the remaining oldParts still to be scanned
    //   (between the head and tail pointers) so that we know to
    //   skip that old part on future iterations.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
    //                                      newHead
    //         newHead ^           ^ newTail
    //
    // * Note that for moves/insertions like the one above, a part
    //   inserted at the head pointer is inserted before the
    //   current `oldParts[oldHead]`, and a part inserted at the
    //   tail pointer is inserted before `newParts[newTail+1]`. The
    //   seeming asymmetry lies in the fact that new parts are
    //   moved into place outside in, so to the right of the head
    //   pointer are old parts, and to the right of the tail
    //   pointer are new parts.
    //
    // * We always restart back from the top of the algorithm,
    //   allowing matching and simple updates in place to
    //   continue...
    //
    // * Example below: the head pointers once again match, so
    //   simply update part 1 and record it in the `newParts`
    //   array.  Last, advance both head pointers.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //            newHead ^        ^ newTail
    //
    // * As mentioned above, items that were moved as a result of
    //   being stuck (the final else clause in the code below) are
    //   marked with null, so we always advance old pointers over
    //   these so we're comparing the next actual old value on
    //   either end.
    //
    // * Example below: `oldHead` is null (already placed in
    //   newParts), so advance `oldHead`.
    //
    //            oldHead v     v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
    //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //               newHead ^     ^ newTail
    //
    // * Note it's not critical to mark old parts as null when they
    //   are moved from head to tail or tail to head, since they
    //   will be outside the pointer range and never visited again.
    //
    // * Example below: Here the old tail key matches the new head
    //   key, so the part at the `oldTail` position and move its
    //   DOM to the new head position (before `oldParts[oldHead]`).
    //   Last, advance `oldTail` and `newHead` pointers.
    //
    //               oldHead v  v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
    //                                     advance oldTail & newHead
    //               newHead ^     ^ newTail
    //
    // * Example below: Old and new head keys match, so update the
    //   old head part in place, and advance the `oldHead` and
    //   `newHead` pointers.
    //
    //               oldHead v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
    //                                      newHead
    //                  newHead ^  ^ newTail
    //
    // * Once the new or old pointers move past each other then all
    //   we have left is additions (if old list exhausted) or
    //   removals (if new list exhausted). Those are handled in the
    //   final while loops at the end.
    //
    // * Example below: `oldHead` exceeded `oldTail`, so we're done
    //   with the main loop.  Create the remaining part and insert
    //   it at the new head position, and the update is complete.
    //
    //                   (oldHead > oldTail)
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //                     newHead ^ newTail
    //
    // * Note that the order of the if/else clauses is not
    //   important to the algorithm, as long as the null checks
    //   come first (to ensure we're always working on valid old
    //   parts) and that the final else clause comes last (since
    //   that's where the expensive moves occur). The order of
    //   remaining clauses is is just a simple guess at which cases
    //   will be most common.
    //
    // * TODO(kschaaf) Note, we could calculate the longest
    //   increasing subsequence (LIS) of old items in new position,
    //   and only move those not in the LIS set. However that costs
    //   O(nlogn) time and adds a bit more code, and only helps
    //   make rare types of mutations require fewer moves. The
    //   above handles removes, adds, reversal, swaps, and single
    //   moves of contiguous items in linear time, in the minimum
    //   number of moves. As the number of multiple moves where LIS
    //   might help approaches a random shuffle, the LIS
    //   optimization becomes less helpful, so it seems not worth
    //   the code at this point. Could reconsider if a compelling
    //   case arises.

    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        // `null` means old part at head has already been used
        // below; skip
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        // `null` means old part at tail has already been used
        // below; skip
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        // Old head matches new head; update in place
        newParts[newHead] = updatePart(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        // Old tail matches new tail; update in place
        newParts[newTail] = updatePart(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        // Old head matches new tail; update and move to new tail
        newParts[newTail] = updatePart(oldParts[oldHead], newValues[newTail]);
        insertPartBefore(containerPart, oldParts[oldHead], newParts[newTail + 1]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        // Old tail matches new head; update and move to new head
        newParts[newHead] = updatePart(oldParts[oldTail], newValues[newHead]);
        insertPartBefore(containerPart, oldParts[oldTail], oldParts[oldHead]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === undefined) {
          // Lazily generate key-to-index maps, used for removals &
          // moves below
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }

        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          // Old head is no longer in new list; remove
          removePart(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          // Old tail is no longer in new list; remove
          removePart(oldParts[oldTail]);
          oldTail--;
        } else {
          // Any mismatches at this point are due to additions or
          // moves; see if we have an old part we can reuse and move
          // into place
          const oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          const oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;

          if (oldPart === null) {
            // No old part for this value; create a new one and
            // insert it
            const newPart = createAndInsertPart(containerPart, oldParts[oldHead]);
            updatePart(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            // Reuse old part
            newParts[newHead] = updatePart(oldPart, newValues[newHead]);
            insertPartBefore(containerPart, oldPart, oldParts[oldHead]); // This marks the old part as having been used, so that
            // it will be skipped in the first two checks above

            oldParts[oldIndex] = null;
          }

          newHead++;
        }
      }
    } // Add parts for any remaining new values


    while (newHead <= newTail) {
      // For all remaining additions, we insert before last new
      // tail, since old pointers are no longer valid
      const newPart = createAndInsertPart(containerPart, newParts[newTail + 1]);
      updatePart(newPart, newValues[newHead]);
      newParts[newHead++] = newPart;
    } // Remove any remaining unused old parts


    while (oldHead <= oldTail) {
      const oldPart = oldParts[oldHead++];

      if (oldPart !== null) {
        removePart(oldPart);
      }
    } // Save order of new parts for next round


    partListCache.set(containerPart, newParts);
    keyListCache.set(containerPart, newKeys);
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmVGbn0gZnJvbSAnLi4vbGliL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge2NyZWF0ZU1hcmtlciwgZGlyZWN0aXZlLCBOb2RlUGFydCwgUGFydCwgcmVtb3ZlTm9kZXMsIHJlcGFyZW50Tm9kZXN9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuZXhwb3J0IHR5cGUgS2V5Rm48VD4gPSAoaXRlbTogVCwgaW5kZXg6IG51bWJlcikgPT4gdW5rbm93bjtcbmV4cG9ydCB0eXBlIEl0ZW1UZW1wbGF0ZTxUPiA9IChpdGVtOiBULCBpbmRleDogbnVtYmVyKSA9PiB1bmtub3duO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgcGFydHNcbi8vIFRPRE8oa3NjaGFhZik6IFJlZmFjdG9yIGludG8gUGFydCBBUEk/XG5jb25zdCBjcmVhdGVBbmRJbnNlcnRQYXJ0ID1cbiAgICAoY29udGFpbmVyUGFydDogTm9kZVBhcnQsIGJlZm9yZVBhcnQ/OiBOb2RlUGFydCk6IE5vZGVQYXJ0ID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclBhcnQuc3RhcnROb2RlLnBhcmVudE5vZGUgYXMgTm9kZTtcbiAgICAgIGNvbnN0IGJlZm9yZU5vZGUgPSBiZWZvcmVQYXJ0ID09PSB1bmRlZmluZWQgPyBjb250YWluZXJQYXJ0LmVuZE5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVBhcnQuc3RhcnROb2RlO1xuICAgICAgY29uc3Qgc3RhcnROb2RlID0gY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgYmVmb3JlTm9kZSk7XG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBiZWZvcmVOb2RlKTtcbiAgICAgIGNvbnN0IG5ld1BhcnQgPSBuZXcgTm9kZVBhcnQoY29udGFpbmVyUGFydC5vcHRpb25zKTtcbiAgICAgIG5ld1BhcnQuaW5zZXJ0QWZ0ZXJOb2RlKHN0YXJ0Tm9kZSk7XG4gICAgICByZXR1cm4gbmV3UGFydDtcbiAgICB9O1xuXG5jb25zdCB1cGRhdGVQYXJ0ID0gKHBhcnQ6IE5vZGVQYXJ0LCB2YWx1ZTogdW5rbm93bikgPT4ge1xuICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgcGFydC5jb21taXQoKTtcbiAgcmV0dXJuIHBhcnQ7XG59O1xuXG5jb25zdCBpbnNlcnRQYXJ0QmVmb3JlID1cbiAgICAoY29udGFpbmVyUGFydDogTm9kZVBhcnQsIHBhcnQ6IE5vZGVQYXJ0LCByZWY/OiBOb2RlUGFydCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUGFydC5zdGFydE5vZGUucGFyZW50Tm9kZSBhcyBOb2RlO1xuICAgICAgY29uc3QgYmVmb3JlTm9kZSA9IHJlZiA/IHJlZi5zdGFydE5vZGUgOiBjb250YWluZXJQYXJ0LmVuZE5vZGU7XG4gICAgICBjb25zdCBlbmROb2RlID0gcGFydC5lbmROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGVuZE5vZGUgIT09IGJlZm9yZU5vZGUpIHtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250YWluZXIsIHBhcnQuc3RhcnROb2RlLCBlbmROb2RlLCBiZWZvcmVOb2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG5jb25zdCByZW1vdmVQYXJ0ID0gKHBhcnQ6IE5vZGVQYXJ0KSA9PiB7XG4gIHJlbW92ZU5vZGVzKFxuICAgICAgcGFydC5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHBhcnQuc3RhcnROb2RlLCBwYXJ0LmVuZE5vZGUubmV4dFNpYmxpbmcpO1xufTtcblxuLy8gSGVscGVyIGZvciBnZW5lcmF0aW5nIGEgbWFwIG9mIGFycmF5IGl0ZW0gdG8gaXRzIGluZGV4IG92ZXIgYSBzdWJzZXRcbi8vIG9mIGFuIGFycmF5ICh1c2VkIHRvIGxhemlseSBnZW5lcmF0ZSBgbmV3S2V5VG9JbmRleE1hcGAgYW5kXG4vLyBgb2xkS2V5VG9JbmRleE1hcGApXG5jb25zdCBnZW5lcmF0ZU1hcCA9IChsaXN0OiB1bmtub3duW10sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgbWFwLnNldChsaXN0W2ldLCBpKTtcbiAgfVxuICByZXR1cm4gbWFwO1xufTtcblxuLy8gU3RvcmVzIHByZXZpb3VzIG9yZGVyZWQgbGlzdCBvZiBwYXJ0cyBhbmQgbWFwIG9mIGtleSB0byBpbmRleFxuY29uc3QgcGFydExpc3RDYWNoZSA9IG5ldyBXZWFrTWFwPE5vZGVQYXJ0LCAoTm9kZVBhcnQgfCBudWxsKVtdPigpO1xuY29uc3Qga2V5TGlzdENhY2hlID0gbmV3IFdlYWtNYXA8Tm9kZVBhcnQsIHVua25vd25bXT4oKTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHJlcGVhdHMgYSBzZXJpZXMgb2YgdmFsdWVzICh1c3VhbGx5IGBUZW1wbGF0ZVJlc3VsdHNgKVxuICogZ2VuZXJhdGVkIGZyb20gYW4gaXRlcmFibGUsIGFuZCB1cGRhdGVzIHRob3NlIGl0ZW1zIGVmZmljaWVudGx5IHdoZW4gdGhlXG4gKiBpdGVyYWJsZSBjaGFuZ2VzIGJhc2VkIG9uIHVzZXItcHJvdmlkZWQgYGtleXNgIGFzc29jaWF0ZWQgd2l0aCBlYWNoIGl0ZW0uXG4gKlxuICogTm90ZSB0aGF0IGlmIGEgYGtleUZuYCBpcyBwcm92aWRlZCwgc3RyaWN0IGtleS10by1ET00gbWFwcGluZyBpcyBtYWludGFpbmVkLFxuICogbWVhbmluZyBwcmV2aW91cyBET00gZm9yIGEgZ2l2ZW4ga2V5IGlzIG1vdmVkIGludG8gdGhlIG5ldyBwb3NpdGlvbiBpZlxuICogbmVlZGVkLCBhbmQgRE9NIHdpbGwgbmV2ZXIgYmUgcmV1c2VkIHdpdGggdmFsdWVzIGZvciBkaWZmZXJlbnQga2V5cyAobmV3IERPTVxuICogd2lsbCBhbHdheXMgYmUgY3JlYXRlZCBmb3IgbmV3IGtleXMpLiBUaGlzIGlzIGdlbmVyYWxseSB0aGUgbW9zdCBlZmZpY2llbnRcbiAqIHdheSB0byB1c2UgYHJlcGVhdGAgc2luY2UgaXQgcGVyZm9ybXMgbWluaW11bSB1bm5lY2Vzc2FyeSB3b3JrIGZvciBpbnNlcnRpb25zXG4gKiBhbWQgcmVtb3ZhbHMuXG4gKlxuICogSU1QT1JUQU5UOiBJZiBwcm92aWRpbmcgYSBga2V5Rm5gLCBrZXlzICptdXN0KiBiZSB1bmlxdWUgZm9yIGFsbCBpdGVtcyBpbiBhXG4gKiBnaXZlbiBjYWxsIHRvIGByZXBlYXRgLiBUaGUgYmVoYXZpb3Igd2hlbiB0d28gb3IgbW9yZSBpdGVtcyBoYXZlIHRoZSBzYW1lIGtleVxuICogaXMgdW5kZWZpbmVkLlxuICpcbiAqIElmIG5vIGBrZXlGbmAgaXMgcHJvdmlkZWQsIHRoaXMgZGlyZWN0aXZlIHdpbGwgcGVyZm9ybSBzaW1pbGFyIHRvIG1hcHBpbmdcbiAqIGl0ZW1zIHRvIHZhbHVlcywgYW5kIERPTSB3aWxsIGJlIHJldXNlZCBhZ2FpbnN0IHBvdGVudGlhbGx5IGRpZmZlcmVudCBpdGVtcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGVhdCA9XG4gICAgZGlyZWN0aXZlKFxuICAgICAgICA8VD4oaXRlbXM6IEl0ZXJhYmxlPFQ+LFxuICAgICAgICAgICAga2V5Rm5PclRlbXBsYXRlOiBLZXlGbjxUPnxJdGVtVGVtcGxhdGU8VD4sXG4gICAgICAgICAgICB0ZW1wbGF0ZT86IEl0ZW1UZW1wbGF0ZTxUPik6XG4gICAgICAgICAgICBEaXJlY3RpdmVGbiA9PiB7XG4gICAgICAgICAgICAgIGxldCBrZXlGbjogS2V5Rm48VD47XG4gICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSBrZXlGbk9yVGVtcGxhdGU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Rm5PclRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBrZXlGbiA9IGtleUZuT3JUZW1wbGF0ZSBhcyBLZXlGbjxUPjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoY29udGFpbmVyUGFydDogUGFydCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGNvbnRhaW5lclBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVwZWF0IGNhbiBvbmx5IGJlIHVzZWQgaW4gdGV4dCBiaW5kaW5ncycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPbGQgcGFydCAmIGtleSBsaXN0cyBhcmUgcmV0cmlldmVkIGZyb20gdGhlIGxhc3QgdXBkYXRlXG4gICAgICAgICAgICAgICAgLy8gKGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFydCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGUgZGlyZWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBhcnRzID0gcGFydExpc3RDYWNoZS5nZXQoY29udGFpbmVyUGFydCkgfHwgW107XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkS2V5cyA9IGtleUxpc3RDYWNoZS5nZXQoY29udGFpbmVyUGFydCkgfHwgW107XG5cbiAgICAgICAgICAgICAgICAvLyBOZXcgcGFydCBsaXN0IHdpbGwgYmUgYnVpbHQgdXAgYXMgd2UgZ28gKGVpdGhlciByZXVzZWQgZnJvbVxuICAgICAgICAgICAgICAgIC8vIG9sZCBwYXJ0cyBvciBjcmVhdGVkIGZvciBuZXcga2V5cyBpbiB0aGlzIHVwZGF0ZSkuIFRoaXMgaXNcbiAgICAgICAgICAgICAgICAvLyBzYXZlZCBpbiB0aGUgYWJvdmUgY2FjaGUgYXQgdGhlIGVuZCBvZiB0aGUgdXBkYXRlLlxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhcnRzOiBOb2RlUGFydFtdID0gW107XG5cbiAgICAgICAgICAgICAgICAvLyBOZXcgdmFsdWUgbGlzdCBpcyBlYWdlcmx5IGdlbmVyYXRlZCBmcm9tIGl0ZW1zIGFsb25nIHdpdGggYVxuICAgICAgICAgICAgICAgIC8vIHBhcmFsbGVsIGFycmF5IGluZGljYXRpbmcgaXRzIGtleS5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZXM6IHVua25vd25bXSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0tleXM6IHVua25vd25bXSA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICBuZXdLZXlzW2luZGV4XSA9IGtleUZuID8ga2V5Rm4oaXRlbSwgaW5kZXgpIDogaW5kZXg7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbaW5kZXhdID0gdGVtcGxhdGUgIShpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcHMgZnJvbSBrZXkgdG8gaW5kZXggZm9yIGN1cnJlbnQgYW5kIHByZXZpb3VzIHVwZGF0ZTsgdGhlc2VcbiAgICAgICAgICAgICAgICAvLyBhcmUgZ2VuZXJhdGVkIGxhemlseSBvbmx5IHdoZW4gbmVlZGVkIGFzIGEgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAvLyBvcHRpbWl6YXRpb24sIHNpbmNlIHRoZXkgYXJlIG9ubHkgcmVxdWlyZWQgZm9yIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgLy8gbm9uLWNvbnRpZ3VvdXMgY2hhbmdlcyBpbiB0aGUgbGlzdCwgd2hpY2ggYXJlIGxlc3MgY29tbW9uLlxuICAgICAgICAgICAgICAgIGxldCBuZXdLZXlUb0luZGV4TWFwITogTWFwPHVua25vd24sIG51bWJlcj47XG4gICAgICAgICAgICAgICAgbGV0IG9sZEtleVRvSW5kZXhNYXAhOiBNYXA8dW5rbm93biwgbnVtYmVyPjtcblxuICAgICAgICAgICAgICAgIC8vIEhlYWQgYW5kIHRhaWwgcG9pbnRlcnMgdG8gb2xkIHBhcnRzIGFuZCBuZXcgdmFsdWVzXG4gICAgICAgICAgICAgICAgbGV0IG9sZEhlYWQgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBvbGRUYWlsID0gb2xkUGFydHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SGVhZCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1RhaWwgPSBuZXdWYWx1ZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIC8vIE92ZXJ2aWV3IG9mIE8obikgcmVjb25jaWxpYXRpb24gYWxnb3JpdGhtIChnZW5lcmFsIGFwcHJvYWNoXG4gICAgICAgICAgICAgICAgLy8gYmFzZWQgb24gaWRlYXMgZm91bmQgaW4gaXZpLCB2dWUsIHNuYWJiZG9tLCBldGMuKTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogV2Ugc3RhcnQgd2l0aCB0aGUgbGlzdCBvZiBvbGQgcGFydHMgYW5kIG5ldyB2YWx1ZXMgKGFuZFxuICAgICAgICAgICAgICAgIC8vICAgYXJyYXlzIG9mIHRoZWlyIHJlc3BlY3RpdmUga2V5cyksIGhlYWQvdGFpbCBwb2ludGVycyBpbnRvXG4gICAgICAgICAgICAgICAgLy8gICBlYWNoLCBhbmQgd2UgYnVpbGQgdXAgdGhlIG5ldyBsaXN0IG9mIHBhcnRzIGJ5IHVwZGF0aW5nXG4gICAgICAgICAgICAgICAgLy8gICAoYW5kIHdoZW4gbmVlZGVkLCBtb3ZpbmcpIG9sZCBwYXJ0cyBvciBjcmVhdGluZyBuZXcgb25lcy5cbiAgICAgICAgICAgICAgICAvLyAgIFRoZSBpbml0aWFsIHNjZW5hcmlvIG1pZ2h0IGxvb2sgbGlrZSB0aGlzIChmb3IgYnJldml0eSBvZlxuICAgICAgICAgICAgICAgIC8vICAgdGhlIGRpYWdyYW1zLCB0aGUgbnVtYmVycyBpbiB0aGUgYXJyYXkgcmVmbGVjdCBrZXlzXG4gICAgICAgICAgICAgICAgLy8gICBhc3NvY2lhdGVkIHdpdGggdGhlIG9sZCBwYXJ0cyBvciBuZXcgdmFsdWVzLCBhbHRob3VnaCBrZXlzXG4gICAgICAgICAgICAgICAgLy8gICBhbmQgcGFydHMvdmFsdWVzIGFyZSBhY3R1YWxseSBzdG9yZWQgaW4gcGFyYWxsZWwgYXJyYXlzXG4gICAgICAgICAgICAgICAgLy8gICBpbmRleGVkIHVzaW5nIHRoZSBzYW1lIGhlYWQvdGFpbCBwb2ludGVycyk6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgIG9sZEhlYWQgdiAgICAgICAgICAgICAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIDIsIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWyAsICAsICAsICAsICAsICAsICBdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdIDwtIHJlZmxlY3RzIHRoZSB1c2VyJ3MgbmV3XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gb3JkZXJcbiAgICAgICAgICAgICAgICAvLyAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEl0ZXJhdGUgb2xkICYgbmV3IGxpc3RzIGZyb20gYm90aCBzaWRlcywgdXBkYXRpbmcsXG4gICAgICAgICAgICAgICAgLy8gICBzd2FwcGluZywgb3IgcmVtb3ZpbmcgcGFydHMgYXQgdGhlIGhlYWQvdGFpbCBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyAgIHVudGlsIG5laXRoZXIgaGVhZCBub3IgdGFpbCBjYW4gbW92ZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzoga2V5cyBhdCBoZWFkIHBvaW50ZXJzIG1hdGNoLCBzbyB1cGRhdGUgb2xkXG4gICAgICAgICAgICAgICAgLy8gICBwYXJ0IDAgaW4tcGxhY2UgKG5vIG5lZWQgdG8gbW92ZSBpdCkgYW5kIHJlY29yZCBwYXJ0IDAgaW5cbiAgICAgICAgICAgICAgICAvLyAgIHRoZSBgbmV3UGFydHNgIGxpc3QuIFRoZSBsYXN0IHRoaW5nIHdlIGRvIGlzIGFkdmFuY2UgdGhlXG4gICAgICAgICAgICAgICAgLy8gICBgb2xkSGVhZGAgYW5kIGBuZXdIZWFkYCBwb2ludGVycyAod2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gICBuZXh0IGRpYWdyYW0pLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICBvbGRIZWFkIHYgICAgICAgICAgICAgICAgIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAyLCAzLCA0LCA1LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgbmV3UGFydHM6IFswLCAgLCAgLCAgLCAgLCAgLCAgXSA8LSBoZWFkcyBtYXRjaGVkOiB1cGRhdGUgMFxuICAgICAgICAgICAgICAgIC8vICAgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XSAgICBhbmQgYWR2YW5jZSBib3RoIG9sZEhlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiBuZXdIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAgICBuZXdIZWFkIF4gICAgICAgICAgICAgICAgIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBoZWFkIHBvaW50ZXJzIGRvbid0IG1hdGNoLCBidXQgdGFpbFxuICAgICAgICAgICAgICAgIC8vICAgcG9pbnRlcnMgZG8sIHNvIHVwZGF0ZSBwYXJ0IDYgaW4gcGxhY2UgKG5vIG5lZWQgdG8gbW92ZVxuICAgICAgICAgICAgICAgIC8vICAgaXQpLCBhbmQgcmVjb3JkIHBhcnQgNiBpbiB0aGUgYG5ld1BhcnRzYCBsaXN0LiBMYXN0LFxuICAgICAgICAgICAgICAgIC8vICAgYWR2YW5jZSB0aGUgYG9sZFRhaWxgIGFuZCBgb2xkSGVhZGAgcG9pbnRlcnMuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9sZEhlYWQgdiAgICAgICAgICAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIDIsIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsICAsICAsICAsICAsICAsIDZdIDwtIHRhaWxzIG1hdGNoZWQ6IHVwZGF0ZSA2XG4gICAgICAgICAgICAgICAgLy8gICBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFuZCBhZHZhbmNlIGJvdGggb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIElmIG5laXRoZXIgaGVhZCBub3IgdGFpbCBtYXRjaDsgbmV4dCBjaGVjayBpZiBvbmUgb2YgdGhlXG4gICAgICAgICAgICAgICAgLy8gICBvbGQgaGVhZC90YWlsIGl0ZW1zIHdhcyByZW1vdmVkLiBXZSBmaXJzdCBuZWVkIHRvIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgLy8gICB0aGUgcmV2ZXJzZSBtYXAgb2YgbmV3IGtleXMgdG8gaW5kZXggKGBuZXdLZXlUb0luZGV4TWFwYCksXG4gICAgICAgICAgICAgICAgLy8gICB3aGljaCBpcyBkb25lIG9uY2UgbGF6aWx5IGFzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLFxuICAgICAgICAgICAgICAgIC8vICAgc2luY2Ugd2Ugb25seSBoaXQgdGhpcyBjYXNlIGlmIG11bHRpcGxlIG5vbi1jb250aWd1b3VzXG4gICAgICAgICAgICAgICAgLy8gICBjaGFuZ2VzIHdlcmUgbWFkZS4gTm90ZSB0aGF0IGZvciBjb250aWd1b3VzIHJlbW92YWxcbiAgICAgICAgICAgICAgICAvLyAgIGFueXdoZXJlIGluIHRoZSBsaXN0LCB0aGUgaGVhZCBhbmQgdGFpbHMgd291bGQgYWR2YW5jZVxuICAgICAgICAgICAgICAgIC8vICAgZnJvbSBlaXRoZXIgZW5kIGFuZCBwYXNzIGVhY2ggb3RoZXIgYmVmb3JlIHdlIGdldCB0byB0aGlzXG4gICAgICAgICAgICAgICAgLy8gICBjYXNlIGFuZCByZW1vdmFscyB3b3VsZCBiZSBoYW5kbGVkIGluIHRoZSBmaW5hbCB3aGlsZSBsb29wXG4gICAgICAgICAgICAgICAgLy8gICB3aXRob3V0IG5lZWRpbmcgdG8gZ2VuZXJhdGUgdGhlIG1hcC5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogVGhlIGtleSBhdCBgb2xkVGFpbGAgd2FzIHJlbW92ZWQgKG5vIGxvbmdlclxuICAgICAgICAgICAgICAgIC8vICAgaW4gdGhlIGBuZXdLZXlUb0luZGV4TWFwYCksIHNvIHJlbW92ZSB0aGF0IHBhcnQgZnJvbSB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIERPTSBhbmQgYWR2YW5jZSBqdXN0IHRoZSBgb2xkVGFpbGAgcG9pbnRlci5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2xkSGVhZCB2ICAgICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgICwgICwgICwgICwgICwgNl0gPC0gNSBub3QgaW4gbmV3IG1hcDogcmVtb3ZlXG4gICAgICAgICAgICAgICAgLy8gICBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIDUgYW5kIGFkdmFuY2Ugb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3SGVhZCBeICAgICAgICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogT25jZSBoZWFkIGFuZCB0YWlsIGNhbm5vdCBtb3ZlLCBhbnkgbWlzbWF0Y2hlcyBhcmUgZHVlIHRvXG4gICAgICAgICAgICAgICAgLy8gICBlaXRoZXIgbmV3IG9yIG1vdmVkIGl0ZW1zOyBpZiBhIG5ldyBrZXkgaXMgaW4gdGhlIHByZXZpb3VzXG4gICAgICAgICAgICAgICAgLy8gICBcIm9sZCBrZXkgdG8gb2xkIGluZGV4XCIgbWFwLCBtb3ZlIHRoZSBvbGQgcGFydCB0byB0aGUgbmV3XG4gICAgICAgICAgICAgICAgLy8gICBsb2NhdGlvbiwgb3RoZXJ3aXNlIGNyZWF0ZSBhbmQgaW5zZXJ0IGEgbmV3IHBhcnQuIE5vdGVcbiAgICAgICAgICAgICAgICAvLyAgIHRoYXQgd2hlbiBtb3ZpbmcgYW4gb2xkIHBhcnQgd2UgbnVsbCBpdHMgcG9zaXRpb24gaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gICBvbGRQYXJ0cyBhcnJheSBpZiBpdCBsaWVzIGJldHdlZW4gdGhlIGhlYWQgYW5kIHRhaWwgc28gd2VcbiAgICAgICAgICAgICAgICAvLyAgIGtub3cgdG8gc2tpcCBpdCB3aGVuIHRoZSBwb2ludGVycyBnZXQgdGhlcmUuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IG5laXRoZXIgaGVhZCBub3IgdGFpbCBtYXRjaCwgYW5kIG5laXRoZXJcbiAgICAgICAgICAgICAgICAvLyAgIHdlcmUgcmVtb3ZlZDsgc28gZmluZCB0aGUgYG5ld0hlYWRgIGtleSBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGBvbGRLZXlUb0luZGV4TWFwYCwgYW5kIG1vdmUgdGhhdCBvbGQgcGFydCdzIERPTSBpbnRvIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgbmV4dCBoZWFkIHBvc2l0aW9uIChiZWZvcmUgYG9sZFBhcnRzW29sZEhlYWRdYCkuIExhc3QsXG4gICAgICAgICAgICAgICAgLy8gICBudWxsIHRoZSBwYXJ0IGluIHRoZSBgb2xkUGFydGAgYXJyYXkgc2luY2UgaXQgd2FzXG4gICAgICAgICAgICAgICAgLy8gICBzb21ld2hlcmUgaW4gdGhlIHJlbWFpbmluZyBvbGRQYXJ0cyBzdGlsbCB0byBiZSBzY2FubmVkXG4gICAgICAgICAgICAgICAgLy8gICAoYmV0d2VlbiB0aGUgaGVhZCBhbmQgdGFpbCBwb2ludGVycykgc28gdGhhdCB3ZSBrbm93IHRvXG4gICAgICAgICAgICAgICAgLy8gICBza2lwIHRoYXQgb2xkIHBhcnQgb24gZnV0dXJlIGl0ZXJhdGlvbnMuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9sZEhlYWQgdiAgICAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsIDIsICAsICAsICAsICAsIDZdIDwtIHN0dWNrOiB1cGRhdGUgJiBtb3ZlIDJcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICAgaW50byBwbGFjZSBhbmQgYWR2YW5jZVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdIZWFkIF4gICAgICAgICAgIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBOb3RlIHRoYXQgZm9yIG1vdmVzL2luc2VydGlvbnMgbGlrZSB0aGUgb25lIGFib3ZlLCBhIHBhcnRcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydGVkIGF0IHRoZSBoZWFkIHBvaW50ZXIgaXMgaW5zZXJ0ZWQgYmVmb3JlIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgY3VycmVudCBgb2xkUGFydHNbb2xkSGVhZF1gLCBhbmQgYSBwYXJ0IGluc2VydGVkIGF0IHRoZVxuICAgICAgICAgICAgICAgIC8vICAgdGFpbCBwb2ludGVyIGlzIGluc2VydGVkIGJlZm9yZSBgbmV3UGFydHNbbmV3VGFpbCsxXWAuIFRoZVxuICAgICAgICAgICAgICAgIC8vICAgc2VlbWluZyBhc3ltbWV0cnkgbGllcyBpbiB0aGUgZmFjdCB0aGF0IG5ldyBwYXJ0cyBhcmVcbiAgICAgICAgICAgICAgICAvLyAgIG1vdmVkIGludG8gcGxhY2Ugb3V0c2lkZSBpbiwgc28gdG8gdGhlIHJpZ2h0IG9mIHRoZSBoZWFkXG4gICAgICAgICAgICAgICAgLy8gICBwb2ludGVyIGFyZSBvbGQgcGFydHMsIGFuZCB0byB0aGUgcmlnaHQgb2YgdGhlIHRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIHBvaW50ZXIgYXJlIG5ldyBwYXJ0cy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogV2UgYWx3YXlzIHJlc3RhcnQgYmFjayBmcm9tIHRoZSB0b3Agb2YgdGhlIGFsZ29yaXRobSxcbiAgICAgICAgICAgICAgICAvLyAgIGFsbG93aW5nIG1hdGNoaW5nIGFuZCBzaW1wbGUgdXBkYXRlcyBpbiBwbGFjZSB0b1xuICAgICAgICAgICAgICAgIC8vICAgY29udGludWUuLi5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogdGhlIGhlYWQgcG9pbnRlcnMgb25jZSBhZ2FpbiBtYXRjaCwgc29cbiAgICAgICAgICAgICAgICAvLyAgIHNpbXBseSB1cGRhdGUgcGFydCAxIGFuZCByZWNvcmQgaXQgaW4gdGhlIGBuZXdQYXJ0c2BcbiAgICAgICAgICAgICAgICAvLyAgIGFycmF5LiAgTGFzdCwgYWR2YW5jZSBib3RoIGhlYWQgcG9pbnRlcnMuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9sZEhlYWQgdiAgICAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsIDIsIDEsICAsICAsICAsIDZdIDwtIGhlYWRzIG1hdGNoZWQ6IHVwZGF0ZSAxXG4gICAgICAgICAgICAgICAgLy8gICBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFuZCBhZHZhbmNlIGJvdGggb2xkSGVhZFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIG5ld0hlYWQgXiAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEFzIG1lbnRpb25lZCBhYm92ZSwgaXRlbXMgdGhhdCB3ZXJlIG1vdmVkIGFzIGEgcmVzdWx0IG9mXG4gICAgICAgICAgICAgICAgLy8gICBiZWluZyBzdHVjayAodGhlIGZpbmFsIGVsc2UgY2xhdXNlIGluIHRoZSBjb2RlIGJlbG93KSBhcmVcbiAgICAgICAgICAgICAgICAvLyAgIG1hcmtlZCB3aXRoIG51bGwsIHNvIHdlIGFsd2F5cyBhZHZhbmNlIG9sZCBwb2ludGVycyBvdmVyXG4gICAgICAgICAgICAgICAgLy8gICB0aGVzZSBzbyB3ZSdyZSBjb21wYXJpbmcgdGhlIG5leHQgYWN0dWFsIG9sZCB2YWx1ZSBvblxuICAgICAgICAgICAgICAgIC8vICAgZWl0aGVyIGVuZC5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogYG9sZEhlYWRgIGlzIG51bGwgKGFscmVhZHkgcGxhY2VkIGluXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0cyksIHNvIGFkdmFuY2UgYG9sZEhlYWRgLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBvbGRIZWFkIHYgICAgIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAtLCAzLCA0LCA1LCA2XSA8LSBvbGQgaGVhZCBhbHJlYWR5IHVzZWQ6XG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsIDIsIDEsICAsICAsICAsIDZdICAgIGFkdmFuY2Ugb2xkSGVhZFxuICAgICAgICAgICAgICAgIC8vICAgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgbmV3SGVhZCBeICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogTm90ZSBpdCdzIG5vdCBjcml0aWNhbCB0byBtYXJrIG9sZCBwYXJ0cyBhcyBudWxsIHdoZW4gdGhleVxuICAgICAgICAgICAgICAgIC8vICAgYXJlIG1vdmVkIGZyb20gaGVhZCB0byB0YWlsIG9yIHRhaWwgdG8gaGVhZCwgc2luY2UgdGhleVxuICAgICAgICAgICAgICAgIC8vICAgd2lsbCBiZSBvdXRzaWRlIHRoZSBwb2ludGVyIHJhbmdlIGFuZCBuZXZlciB2aXNpdGVkIGFnYWluLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBIZXJlIHRoZSBvbGQgdGFpbCBrZXkgbWF0Y2hlcyB0aGUgbmV3IGhlYWRcbiAgICAgICAgICAgICAgICAvLyAgIGtleSwgc28gdGhlIHBhcnQgYXQgdGhlIGBvbGRUYWlsYCBwb3NpdGlvbiBhbmQgbW92ZSBpdHNcbiAgICAgICAgICAgICAgICAvLyAgIERPTSB0byB0aGUgbmV3IGhlYWQgcG9zaXRpb24gKGJlZm9yZSBgb2xkUGFydHNbb2xkSGVhZF1gKS5cbiAgICAgICAgICAgICAgICAvLyAgIExhc3QsIGFkdmFuY2UgYG9sZFRhaWxgIGFuZCBgbmV3SGVhZGAgcG9pbnRlcnMuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIG9sZEhlYWQgdiAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsIDIsIDEsIDQsICAsICAsIDZdIDwtIG9sZCB0YWlsIG1hdGNoZXMgbmV3XG4gICAgICAgICAgICAgICAgLy8gICBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgaGVhZDogdXBkYXRlICYgbW92ZSA0LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2Ugb2xkVGFpbCAmIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIG5ld0hlYWQgXiAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IE9sZCBhbmQgbmV3IGhlYWQga2V5cyBtYXRjaCwgc28gdXBkYXRlIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgb2xkIGhlYWQgcGFydCBpbiBwbGFjZSwgYW5kIGFkdmFuY2UgdGhlIGBvbGRIZWFkYCBhbmRcbiAgICAgICAgICAgICAgICAvLyAgIGBuZXdIZWFkYCBwb2ludGVycy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgb2xkSGVhZCB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgNCwgMywgICAsNl0gPC0gaGVhZHMgbWF0Y2g6IHVwZGF0ZSAzXG4gICAgICAgICAgICAgICAgLy8gICBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFuZCBhZHZhbmNlIG9sZEhlYWQgJlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICBuZXdIZWFkIF4gIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBPbmNlIHRoZSBuZXcgb3Igb2xkIHBvaW50ZXJzIG1vdmUgcGFzdCBlYWNoIG90aGVyIHRoZW4gYWxsXG4gICAgICAgICAgICAgICAgLy8gICB3ZSBoYXZlIGxlZnQgaXMgYWRkaXRpb25zIChpZiBvbGQgbGlzdCBleGhhdXN0ZWQpIG9yXG4gICAgICAgICAgICAgICAgLy8gICByZW1vdmFscyAoaWYgbmV3IGxpc3QgZXhoYXVzdGVkKS4gVGhvc2UgYXJlIGhhbmRsZWQgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gICBmaW5hbCB3aGlsZSBsb29wcyBhdCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBgb2xkSGVhZGAgZXhjZWVkZWQgYG9sZFRhaWxgLCBzbyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgLy8gICB3aXRoIHRoZSBtYWluIGxvb3AuICBDcmVhdGUgdGhlIHJlbWFpbmluZyBwYXJ0IGFuZCBpbnNlcnRcbiAgICAgICAgICAgICAgICAvLyAgIGl0IGF0IHRoZSBuZXcgaGVhZCBwb3NpdGlvbiwgYW5kIHRoZSB1cGRhdGUgaXMgY29tcGxldGUuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAob2xkSGVhZCA+IG9sZFRhaWwpXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsIDIsIDEsIDQsIDMsIDcgLDZdIDwtIGNyZWF0ZSBhbmQgaW5zZXJ0IDdcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWQgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIE5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgdGhlIGlmL2Vsc2UgY2xhdXNlcyBpcyBub3RcbiAgICAgICAgICAgICAgICAvLyAgIGltcG9ydGFudCB0byB0aGUgYWxnb3JpdGhtLCBhcyBsb25nIGFzIHRoZSBudWxsIGNoZWNrc1xuICAgICAgICAgICAgICAgIC8vICAgY29tZSBmaXJzdCAodG8gZW5zdXJlIHdlJ3JlIGFsd2F5cyB3b3JraW5nIG9uIHZhbGlkIG9sZFxuICAgICAgICAgICAgICAgIC8vICAgcGFydHMpIGFuZCB0aGF0IHRoZSBmaW5hbCBlbHNlIGNsYXVzZSBjb21lcyBsYXN0IChzaW5jZVxuICAgICAgICAgICAgICAgIC8vICAgdGhhdCdzIHdoZXJlIHRoZSBleHBlbnNpdmUgbW92ZXMgb2NjdXIpLiBUaGUgb3JkZXIgb2ZcbiAgICAgICAgICAgICAgICAvLyAgIHJlbWFpbmluZyBjbGF1c2VzIGlzIGlzIGp1c3QgYSBzaW1wbGUgZ3Vlc3MgYXQgd2hpY2ggY2FzZXNcbiAgICAgICAgICAgICAgICAvLyAgIHdpbGwgYmUgbW9zdCBjb21tb24uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIFRPRE8oa3NjaGFhZikgTm90ZSwgd2UgY291bGQgY2FsY3VsYXRlIHRoZSBsb25nZXN0XG4gICAgICAgICAgICAgICAgLy8gICBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIChMSVMpIG9mIG9sZCBpdGVtcyBpbiBuZXcgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgLy8gICBhbmQgb25seSBtb3ZlIHRob3NlIG5vdCBpbiB0aGUgTElTIHNldC4gSG93ZXZlciB0aGF0IGNvc3RzXG4gICAgICAgICAgICAgICAgLy8gICBPKG5sb2duKSB0aW1lIGFuZCBhZGRzIGEgYml0IG1vcmUgY29kZSwgYW5kIG9ubHkgaGVscHNcbiAgICAgICAgICAgICAgICAvLyAgIG1ha2UgcmFyZSB0eXBlcyBvZiBtdXRhdGlvbnMgcmVxdWlyZSBmZXdlciBtb3Zlcy4gVGhlXG4gICAgICAgICAgICAgICAgLy8gICBhYm92ZSBoYW5kbGVzIHJlbW92ZXMsIGFkZHMsIHJldmVyc2FsLCBzd2FwcywgYW5kIHNpbmdsZVxuICAgICAgICAgICAgICAgIC8vICAgbW92ZXMgb2YgY29udGlndW91cyBpdGVtcyBpbiBsaW5lYXIgdGltZSwgaW4gdGhlIG1pbmltdW1cbiAgICAgICAgICAgICAgICAvLyAgIG51bWJlciBvZiBtb3Zlcy4gQXMgdGhlIG51bWJlciBvZiBtdWx0aXBsZSBtb3ZlcyB3aGVyZSBMSVNcbiAgICAgICAgICAgICAgICAvLyAgIG1pZ2h0IGhlbHAgYXBwcm9hY2hlcyBhIHJhbmRvbSBzaHVmZmxlLCB0aGUgTElTXG4gICAgICAgICAgICAgICAgLy8gICBvcHRpbWl6YXRpb24gYmVjb21lcyBsZXNzIGhlbHBmdWwsIHNvIGl0IHNlZW1zIG5vdCB3b3J0aFxuICAgICAgICAgICAgICAgIC8vICAgdGhlIGNvZGUgYXQgdGhpcyBwb2ludC4gQ291bGQgcmVjb25zaWRlciBpZiBhIGNvbXBlbGxpbmdcbiAgICAgICAgICAgICAgICAvLyAgIGNhc2UgYXJpc2VzLlxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG9sZEhlYWQgPD0gb2xkVGFpbCAmJiBuZXdIZWFkIDw9IG5ld1RhaWwpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChvbGRQYXJ0c1tvbGRIZWFkXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgbnVsbGAgbWVhbnMgb2xkIHBhcnQgYXQgaGVhZCBoYXMgYWxyZWFkeSBiZWVuIHVzZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVsb3c7IHNraXBcbiAgICAgICAgICAgICAgICAgICAgb2xkSGVhZCsrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRQYXJ0c1tvbGRUYWlsXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgbnVsbGAgbWVhbnMgb2xkIHBhcnQgYXQgdGFpbCBoYXMgYWxyZWFkeSBiZWVuIHVzZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVsb3c7IHNraXBcbiAgICAgICAgICAgICAgICAgICAgb2xkVGFpbC0tO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRLZXlzW29sZEhlYWRdID09PSBuZXdLZXlzW25ld0hlYWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9sZCBoZWFkIG1hdGNoZXMgbmV3IGhlYWQ7IHVwZGF0ZSBpbiBwbGFjZVxuICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdIZWFkXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG9sZFBhcnRzW29sZEhlYWRdISwgbmV3VmFsdWVzW25ld0hlYWRdKTtcbiAgICAgICAgICAgICAgICAgICAgb2xkSGVhZCsrO1xuICAgICAgICAgICAgICAgICAgICBuZXdIZWFkKys7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZEtleXNbb2xkVGFpbF0gPT09IG5ld0tleXNbbmV3VGFpbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT2xkIHRhaWwgbWF0Y2hlcyBuZXcgdGFpbDsgdXBkYXRlIGluIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld1RhaWxdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQob2xkUGFydHNbb2xkVGFpbF0hLCBuZXdWYWx1ZXNbbmV3VGFpbF0pO1xuICAgICAgICAgICAgICAgICAgICBvbGRUYWlsLS07XG4gICAgICAgICAgICAgICAgICAgIG5ld1RhaWwtLTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkS2V5c1tvbGRIZWFkXSA9PT0gbmV3S2V5c1tuZXdUYWlsXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbGQgaGVhZCBtYXRjaGVzIG5ldyB0YWlsOyB1cGRhdGUgYW5kIG1vdmUgdG8gbmV3IHRhaWxcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3VGFpbF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChvbGRQYXJ0c1tvbGRIZWFkXSEsIG5ld1ZhbHVlc1tuZXdUYWlsXSk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydFBhcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJQYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkUGFydHNbb2xkSGVhZF0hLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3VGFpbCArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgb2xkSGVhZCsrO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYWlsLS07XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZEtleXNbb2xkVGFpbF0gPT09IG5ld0tleXNbbmV3SGVhZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT2xkIHRhaWwgbWF0Y2hlcyBuZXcgaGVhZDsgdXBkYXRlIGFuZCBtb3ZlIHRvIG5ldyBoZWFkXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld0hlYWRdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQob2xkUGFydHNbb2xkVGFpbF0hLCBuZXdWYWx1ZXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRQYXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUGFydCwgb2xkUGFydHNbb2xkVGFpbF0hLCBvbGRQYXJ0c1tvbGRIZWFkXSEpO1xuICAgICAgICAgICAgICAgICAgICBvbGRUYWlsLS07XG4gICAgICAgICAgICAgICAgICAgIG5ld0hlYWQrKztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdLZXlUb0luZGV4TWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBMYXppbHkgZ2VuZXJhdGUga2V5LXRvLWluZGV4IG1hcHMsIHVzZWQgZm9yIHJlbW92YWxzICZcbiAgICAgICAgICAgICAgICAgICAgICAvLyBtb3ZlcyBiZWxvd1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0tleVRvSW5kZXhNYXAgPSBnZW5lcmF0ZU1hcChuZXdLZXlzLCBuZXdIZWFkLCBuZXdUYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgICBvbGRLZXlUb0luZGV4TWFwID0gZ2VuZXJhdGVNYXAob2xkS2V5cywgb2xkSGVhZCwgb2xkVGFpbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdLZXlUb0luZGV4TWFwLmhhcyhvbGRLZXlzW29sZEhlYWRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIE9sZCBoZWFkIGlzIG5vIGxvbmdlciBpbiBuZXcgbGlzdDsgcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUGFydChvbGRQYXJ0c1tvbGRIZWFkXSEpO1xuICAgICAgICAgICAgICAgICAgICAgIG9sZEhlYWQrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbmV3S2V5VG9JbmRleE1hcC5oYXMob2xkS2V5c1tvbGRUYWlsXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBPbGQgdGFpbCBpcyBubyBsb25nZXIgaW4gbmV3IGxpc3Q7IHJlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVBhcnQob2xkUGFydHNbb2xkVGFpbF0hKTtcbiAgICAgICAgICAgICAgICAgICAgICBvbGRUYWlsLS07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQW55IG1pc21hdGNoZXMgYXQgdGhpcyBwb2ludCBhcmUgZHVlIHRvIGFkZGl0aW9ucyBvclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG1vdmVzOyBzZWUgaWYgd2UgaGF2ZSBhbiBvbGQgcGFydCB3ZSBjYW4gcmV1c2UgYW5kIG1vdmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkSW5kZXggPSBvbGRLZXlUb0luZGV4TWFwLmdldChuZXdLZXlzW25ld0hlYWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRQYXJ0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkSW5kZXggIT09IHVuZGVmaW5lZCA/IG9sZFBhcnRzW29sZEluZGV4XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFBhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIG9sZCBwYXJ0IGZvciB0aGlzIHZhbHVlOyBjcmVhdGUgYSBuZXcgb25lIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zZXJ0IGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQYXJ0ID0gY3JlYXRlQW5kSW5zZXJ0UGFydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJQYXJ0LCBvbGRQYXJ0c1tvbGRIZWFkXSEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChuZXdQYXJ0LCBuZXdWYWx1ZXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3SGVhZF0gPSBuZXdQYXJ0O1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXVzZSBvbGQgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3SGVhZF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQob2xkUGFydCwgbmV3VmFsdWVzW25ld0hlYWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBhcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUGFydCwgb2xkUGFydCwgb2xkUGFydHNbb2xkSGVhZF0hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgbWFya3MgdGhlIG9sZCBwYXJ0IGFzIGhhdmluZyBiZWVuIHVzZWQsIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IHdpbGwgYmUgc2tpcHBlZCBpbiB0aGUgZmlyc3QgdHdvIGNoZWNrcyBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkUGFydHNbb2xkSW5kZXggYXMgbnVtYmVyXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgcGFydHMgZm9yIGFueSByZW1haW5pbmcgbmV3IHZhbHVlc1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdIZWFkIDw9IG5ld1RhaWwpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEZvciBhbGwgcmVtYWluaW5nIGFkZGl0aW9ucywgd2UgaW5zZXJ0IGJlZm9yZSBsYXN0IG5ld1xuICAgICAgICAgICAgICAgICAgLy8gdGFpbCwgc2luY2Ugb2xkIHBvaW50ZXJzIGFyZSBubyBsb25nZXIgdmFsaWRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhcnQgPVxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuZEluc2VydFBhcnQoY29udGFpbmVyUGFydCwgbmV3UGFydHNbbmV3VGFpbCArIDFdKTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQobmV3UGFydCwgbmV3VmFsdWVzW25ld0hlYWRdKTtcbiAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld0hlYWQrK10gPSBuZXdQYXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IHJlbWFpbmluZyB1bnVzZWQgb2xkIHBhcnRzXG4gICAgICAgICAgICAgICAgd2hpbGUgKG9sZEhlYWQgPD0gb2xkVGFpbCkge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkUGFydCA9IG9sZFBhcnRzW29sZEhlYWQrK107XG4gICAgICAgICAgICAgICAgICBpZiAob2xkUGFydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVQYXJ0KG9sZFBhcnQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTYXZlIG9yZGVyIG9mIG5ldyBwYXJ0cyBmb3IgbmV4dCByb3VuZFxuICAgICAgICAgICAgICAgIHBhcnRMaXN0Q2FjaGUuc2V0KGNvbnRhaW5lclBhcnQsIG5ld1BhcnRzKTtcbiAgICAgICAgICAgICAgICBrZXlMaXN0Q2FjaGUuc2V0KGNvbnRhaW5lclBhcnQsIG5ld0tleXMpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkgYXNcbiAgICA8VD4oaXRlbXM6IEl0ZXJhYmxlPFQ+LFxuICAgICAgICBrZXlGbk9yVGVtcGxhdGU6IEtleUZuPFQ+fEl0ZW1UZW1wbGF0ZTxUPixcbiAgICAgICAgdGVtcGxhdGU/OiBJdGVtVGVtcGxhdGU8VD4pID0+IERpcmVjdGl2ZUZuO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQU1BO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9