(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[67],{

/***/ "./src/panels/lovelace/badges/hui-entity-filter-badge.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/badges/hui-entity-filter-badge.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_evaluate_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/evaluate-filter */ "./src/panels/lovelace/common/evaluate-filter.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _create_element_create_badge_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-element/create-badge-element */ "./src/panels/lovelace/create-element/create-badge-element.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class EntityFilterBadge extends HTMLElement {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_elements", void 0);

    _defineProperty(this, "_config", void 0);

    _defineProperty(this, "_configEntities", void 0);

    _defineProperty(this, "_hass", void 0);

    _defineProperty(this, "_oldEntities", void 0);
  }

  setConfig(config) {
    if (!config.entities || !Array.isArray(config.entities)) {
      throw new Error("entities must be specified.");
    }

    if (!(config.state_filter && Array.isArray(config.state_filter)) && !config.entities.every(entity => typeof entity === "object" && entity.state_filter && Array.isArray(entity.state_filter))) {
      throw new Error("Incorrect filter config.");
    }

    this._config = config;
    this._configEntities = undefined;

    if (this.lastChild) {
      this.removeChild(this.lastChild);
      this._elements = undefined;
    }
  }

  set hass(hass) {
    if (!hass || !this._config) {
      return;
    }

    if (this._elements) {
      for (const element of this._elements) {
        element.hass = hass;
      }
    }

    if (!this.haveEntitiesChanged(hass)) {
      this._hass = hass;
      return;
    }

    this._hass = hass;

    if (!this._configEntities) {
      this._configEntities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_1__["processConfigEntities"])(this._config.entities);
    }

    const entitiesList = this._configEntities.filter(entityConf => {
      const stateObj = hass.states[entityConf.entity];

      if (!stateObj) {
        return false;
      }

      if (entityConf.state_filter) {
        for (const filter of entityConf.state_filter) {
          if (Object(_common_evaluate_filter__WEBPACK_IMPORTED_MODULE_0__["evaluateFilter"])(stateObj, filter)) {
            return true;
          }
        }
      } else {
        for (const filter of this._config.state_filter) {
          if (Object(_common_evaluate_filter__WEBPACK_IMPORTED_MODULE_0__["evaluateFilter"])(stateObj, filter)) {
            return true;
          }
        }
      }

      return false;
    });

    if (entitiesList.length === 0) {
      this.style.display = "none";
      return;
    }

    const isSame = this._oldEntities && entitiesList.length === this._oldEntities.length && entitiesList.every((entity, idx) => entity === this._oldEntities[idx]);

    if (!isSame) {
      this._elements = [];

      for (const badgeConfig of entitiesList) {
        const element = Object(_create_element_create_badge_element__WEBPACK_IMPORTED_MODULE_2__["createBadgeElement"])(badgeConfig);
        element.hass = hass;

        this._elements.push(element);
      }

      this._oldEntities = entitiesList;
    }

    if (!this._elements) {
      return;
    }

    while (this.lastChild) {
      this.removeChild(this.lastChild);
    }

    for (const element of this._elements) {
      this.appendChild(element);
    }

    this.style.display = "inline";
  }

  haveEntitiesChanged(hass) {
    if (!this._hass) {
      return true;
    }

    if (!this._configEntities || this._hass.localize !== hass.localize) {
      return true;
    }

    for (const config of this._configEntities) {
      if (this._hass.states[config.entity] !== hass.states[config.entity]) {
        return true;
      }
    }

    return false;
  }

}

customElements.define("hui-entity-filter-badge", EntityFilterBadge);

/***/ }),

/***/ "./src/panels/lovelace/common/evaluate-filter.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/evaluate-filter.ts ***!
  \*******************************************************/
/*! exports provided: evaluateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateFilter", function() { return evaluateFilter; });
const evaluateFilter = (stateObj, filter) => {
  const operator = filter.operator || "==";
  const value = filter.value || filter;
  const state = filter.attribute ? stateObj.attributes[filter.attribute] : stateObj.state;

  switch (operator) {
    case "==":
      return state === value;

    case "<=":
      return state <= value;

    case "<":
      return state < value;

    case ">=":
      return state >= value;

    case ">":
      return state > value;

    case "!=":
      return state !== value;

    case "regex":
      {
        return state.match(value);
      }

    default:
      return false;
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2JhZGdlcy9odWktZW50aXR5LWZpbHRlci1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9ldmFsdWF0ZS1maWx0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZXZhbHVhdGVGaWx0ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2V2YWx1YXRlLWZpbHRlclwiO1xuaW1wb3J0IHsgcHJvY2Vzc0NvbmZpZ0VudGl0aWVzIH0gZnJvbSBcIi4uL2NvbW1vbi9wcm9jZXNzLWNvbmZpZy1lbnRpdGllc1wiO1xuaW1wb3J0IHsgY3JlYXRlQmFkZ2VFbGVtZW50IH0gZnJvbSBcIi4uL2NyZWF0ZS1lbGVtZW50L2NyZWF0ZS1iYWRnZS1lbGVtZW50XCI7XG5pbXBvcnQgeyBFbnRpdHlGaWx0ZXJFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQmFkZ2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVudGl0eUZpbHRlckJhZGdlQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY2xhc3MgRW50aXR5RmlsdGVyQmFkZ2UgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIExvdmVsYWNlQmFkZ2Uge1xuICBwcml2YXRlIF9lbGVtZW50cz86IExvdmVsYWNlQmFkZ2VbXTtcblxuICBwcml2YXRlIF9jb25maWc/OiBFbnRpdHlGaWx0ZXJCYWRnZUNvbmZpZztcblxuICBwcml2YXRlIF9jb25maWdFbnRpdGllcz86IEVudGl0eUZpbHRlckVudGl0eUNvbmZpZ1tdO1xuXG4gIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX29sZEVudGl0aWVzPzogRW50aXR5RmlsdGVyRW50aXR5Q29uZmlnW107XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEVudGl0eUZpbHRlckJhZGdlQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFjb25maWcuZW50aXRpZXMgfHwgIUFycmF5LmlzQXJyYXkoY29uZmlnLmVudGl0aWVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW50aXRpZXMgbXVzdCBiZSBzcGVjaWZpZWQuXCIpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICEoY29uZmlnLnN0YXRlX2ZpbHRlciAmJiBBcnJheS5pc0FycmF5KGNvbmZpZy5zdGF0ZV9maWx0ZXIpKSAmJlxuICAgICAgIWNvbmZpZy5lbnRpdGllcy5ldmVyeShcbiAgICAgICAgKGVudGl0eSkgPT5cbiAgICAgICAgICB0eXBlb2YgZW50aXR5ID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgZW50aXR5LnN0YXRlX2ZpbHRlciAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoZW50aXR5LnN0YXRlX2ZpbHRlcilcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBmaWx0ZXIgY29uZmlnLlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fY29uZmlnRW50aXRpZXMgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgdGhpcy5fZWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0IGhhc3MoaGFzczogSG9tZUFzc2lzdGFudCkge1xuICAgIGlmICghaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5fZWxlbWVudHMpIHtcbiAgICAgICAgZWxlbWVudC5oYXNzID0gaGFzcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGF2ZUVudGl0aWVzQ2hhbmdlZChoYXNzKSkge1xuICAgICAgdGhpcy5faGFzcyA9IGhhc3M7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZ0VudGl0aWVzKSB7XG4gICAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NDb25maWdFbnRpdGllcyh0aGlzLl9jb25maWcuZW50aXRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0aWVzTGlzdCA9IHRoaXMuX2NvbmZpZ0VudGl0aWVzLmZpbHRlcigoZW50aXR5Q29uZikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSBoYXNzLnN0YXRlc1tlbnRpdHlDb25mLmVudGl0eV07XG5cbiAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW50aXR5Q29uZi5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZW50aXR5Q29uZi5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgICBpZiAoZXZhbHVhdGVGaWx0ZXIoc3RhdGVPYmosIGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgdGhpcy5fY29uZmlnIS5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgICBpZiAoZXZhbHVhdGVGaWx0ZXIoc3RhdGVPYmosIGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAoZW50aXRpZXNMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNTYW1lID1cbiAgICAgIHRoaXMuX29sZEVudGl0aWVzICYmXG4gICAgICBlbnRpdGllc0xpc3QubGVuZ3RoID09PSB0aGlzLl9vbGRFbnRpdGllcy5sZW5ndGggJiZcbiAgICAgIGVudGl0aWVzTGlzdC5ldmVyeSgoZW50aXR5LCBpZHgpID0+IGVudGl0eSA9PT0gdGhpcy5fb2xkRW50aXRpZXMhW2lkeF0pO1xuXG4gICAgaWYgKCFpc1NhbWUpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGJhZGdlQ29uZmlnIG9mIGVudGl0aWVzTGlzdCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQmFkZ2VFbGVtZW50KGJhZGdlQ29uZmlnKTtcbiAgICAgICAgZWxlbWVudC5oYXNzID0gaGFzcztcbiAgICAgICAgdGhpcy5fZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29sZEVudGl0aWVzID0gZW50aXRpZXNMaXN0O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aGlsZSAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLl9lbGVtZW50cykge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXZlRW50aXRpZXNDaGFuZ2VkKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2hhc3MpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fY29uZmlnRW50aXRpZXMgfHwgdGhpcy5faGFzcy5sb2NhbGl6ZSAhPT0gaGFzcy5sb2NhbGl6ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjb25maWcgb2YgdGhpcy5fY29uZmlnRW50aXRpZXMpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNzLnN0YXRlc1tjb25maWcuZW50aXR5XSAhPT0gaGFzcy5zdGF0ZXNbY29uZmlnLmVudGl0eV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJodWktZW50aXR5LWZpbHRlci1iYWRnZVwiLCBFbnRpdHlGaWx0ZXJCYWRnZSk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGVGaWx0ZXIgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHksIGZpbHRlcjogYW55KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IG9wZXJhdG9yID0gZmlsdGVyLm9wZXJhdG9yIHx8IFwiPT1cIjtcbiAgY29uc3QgdmFsdWUgPSBmaWx0ZXIudmFsdWUgfHwgZmlsdGVyO1xuICBjb25zdCBzdGF0ZSA9IGZpbHRlci5hdHRyaWJ1dGVcbiAgICA/IHN0YXRlT2JqLmF0dHJpYnV0ZXNbZmlsdGVyLmF0dHJpYnV0ZV1cbiAgICA6IHN0YXRlT2JqLnN0YXRlO1xuXG4gIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICBjYXNlIFwiPT1cIjpcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gdmFsdWU7XG4gICAgY2FzZSBcIjw9XCI6XG4gICAgICByZXR1cm4gc3RhdGUgPD0gdmFsdWU7XG4gICAgY2FzZSBcIjxcIjpcbiAgICAgIHJldHVybiBzdGF0ZSA8IHZhbHVlO1xuICAgIGNhc2UgXCI+PVwiOlxuICAgICAgcmV0dXJuIHN0YXRlID49IHZhbHVlO1xuICAgIGNhc2UgXCI+XCI6XG4gICAgICByZXR1cm4gc3RhdGUgPiB2YWx1ZTtcbiAgICBjYXNlIFwiIT1cIjpcbiAgICAgIHJldHVybiBzdGF0ZSAhPT0gdmFsdWU7XG4gICAgY2FzZSBcInJlZ2V4XCI6IHtcbiAgICAgIHJldHVybiBzdGF0ZS5tYXRjaCh2YWx1ZSk7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZJQTtBQUNBO0FBdUlBOzs7Ozs7Ozs7Ozs7QUM5SUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBakJBO0FBbUJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=