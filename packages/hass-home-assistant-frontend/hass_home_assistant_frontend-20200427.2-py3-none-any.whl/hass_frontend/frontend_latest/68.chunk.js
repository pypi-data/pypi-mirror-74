(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[68],{

/***/ "./src/panels/lovelace/cards/hui-entity-filter-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-entity-filter-card.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_evaluate_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/evaluate-filter */ "./src/panels/lovelace/common/evaluate-filter.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-element/create-card-element */ "./src/panels/lovelace/create-element/create-card-element.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class EntityFilterCard extends HTMLElement {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "isPanel", void 0);

    _defineProperty(this, "_editMode", false);

    _defineProperty(this, "_element", void 0);

    _defineProperty(this, "_config", void 0);

    _defineProperty(this, "_configEntities", void 0);

    _defineProperty(this, "_baseCardConfig", void 0);

    _defineProperty(this, "_hass", void 0);

    _defineProperty(this, "_oldEntities", void 0);
  }

  getCardSize() {
    return this._element ? this._element.getCardSize() : 1;
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
    this._baseCardConfig = Object.assign({
      type: "entities",
      entities: []
    }, this._config.card);

    if (this.lastChild) {
      this.removeChild(this.lastChild);
      this._element = undefined;
    }
  }

  set editMode(editMode) {
    this._editMode = editMode;

    if (!this._element) {
      return;
    }

    this._element.editMode = editMode;
  }

  set hass(hass) {
    if (!hass || !this._config) {
      return;
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

    if (entitiesList.length === 0 && this._config.show_empty === false) {
      this.style.display = "none";
      return;
    }

    const element = this._cardElement();

    if (!element) {
      return;
    }

    if (element.tagName !== "HUI-ERROR-CARD") {
      const isSame = this._oldEntities && entitiesList.length === this._oldEntities.length && entitiesList.every((entity, idx) => entity === this._oldEntities[idx]);

      if (!isSame) {
        this._oldEntities = entitiesList;
        element.setConfig(Object.assign({}, this._baseCardConfig, {
          entities: entitiesList
        }));
      }

      element.isPanel = this.isPanel;
      element.editMode = this._editMode;
      element.hass = hass;
    } // Attach element if it has never been attached.


    if (!this.lastChild) {
      this.appendChild(element);
    }

    this.style.display = "block";
  }

  haveEntitiesChanged(hass) {
    if (!this._hass) {
      return true;
    }

    if (!this._configEntities) {
      return true;
    }

    for (const config of this._configEntities) {
      if (this._hass.states[config.entity] !== hass.states[config.entity] || this._hass.localize !== hass.localize) {
        return true;
      }
    }

    return false;
  }

  _cardElement() {
    if (!this._element && this._config) {
      const element = Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_2__["createCardElement"])(this._baseCardConfig);
      this._element = element;
    }

    return this._element;
  }

}

customElements.define("hui-entity-filter-card", EntityFilterCard);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjguY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1lbnRpdHktZmlsdGVyLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vZXZhbHVhdGUtZmlsdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBldmFsdWF0ZUZpbHRlciB9IGZyb20gXCIuLi9jb21tb24vZXZhbHVhdGUtZmlsdGVyXCI7XG5pbXBvcnQgeyBwcm9jZXNzQ29uZmlnRW50aXRpZXMgfSBmcm9tIFwiLi4vY29tbW9uL3Byb2Nlc3MtY29uZmlnLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDYXJkRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGUtZWxlbWVudC9jcmVhdGUtY2FyZC1lbGVtZW50XCI7XG5pbXBvcnQgeyBFbnRpdHlGaWx0ZXJFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRW50aXR5RmlsdGVyQ2FyZENvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNsYXNzIEVudGl0eUZpbHRlckNhcmQgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZCB7XG4gIHB1YmxpYyBpc1BhbmVsPzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9lZGl0TW9kZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2VsZW1lbnQ/OiBMb3ZlbGFjZUNhcmQ7XG5cbiAgcHJpdmF0ZSBfY29uZmlnPzogRW50aXR5RmlsdGVyQ2FyZENvbmZpZztcblxuICBwcml2YXRlIF9jb25maWdFbnRpdGllcz86IEVudGl0eUZpbHRlckVudGl0eUNvbmZpZ1tdO1xuXG4gIHByaXZhdGUgX2Jhc2VDYXJkQ29uZmlnPzogTG92ZWxhY2VDYXJkQ29uZmlnO1xuXG4gIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX29sZEVudGl0aWVzPzogRW50aXR5RmlsdGVyRW50aXR5Q29uZmlnW107XG5cbiAgcHVibGljIGdldENhcmRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQgPyB0aGlzLl9lbGVtZW50LmdldENhcmRTaXplKCkgOiAxO1xuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEVudGl0eUZpbHRlckNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy5lbnRpdGllcyB8fCAhQXJyYXkuaXNBcnJheShjb25maWcuZW50aXRpZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbnRpdGllcyBtdXN0IGJlIHNwZWNpZmllZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIShjb25maWcuc3RhdGVfZmlsdGVyICYmIEFycmF5LmlzQXJyYXkoY29uZmlnLnN0YXRlX2ZpbHRlcikpICYmXG4gICAgICAhY29uZmlnLmVudGl0aWVzLmV2ZXJ5KFxuICAgICAgICAoZW50aXR5KSA9PlxuICAgICAgICAgIHR5cGVvZiBlbnRpdHkgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICBlbnRpdHkuc3RhdGVfZmlsdGVyICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShlbnRpdHkuc3RhdGVfZmlsdGVyKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IGZpbHRlciBjb25maWcuXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9iYXNlQ2FyZENvbmZpZyA9IHtcbiAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgIGVudGl0aWVzOiBbXSxcbiAgICAgIC4uLnRoaXMuX2NvbmZpZy5jYXJkLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzZXQgZWRpdE1vZGUoZWRpdE1vZGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZGl0TW9kZSA9IGVkaXRNb2RlO1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50LmVkaXRNb2RlID0gZWRpdE1vZGU7XG4gIH1cblxuICBzZXQgaGFzcyhoYXNzOiBIb21lQXNzaXN0YW50KSB7XG4gICAgaWYgKCFoYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGF2ZUVudGl0aWVzQ2hhbmdlZChoYXNzKSkge1xuICAgICAgdGhpcy5faGFzcyA9IGhhc3M7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZ0VudGl0aWVzKSB7XG4gICAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NDb25maWdFbnRpdGllcyh0aGlzLl9jb25maWcuZW50aXRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0aWVzTGlzdCA9IHRoaXMuX2NvbmZpZ0VudGl0aWVzLmZpbHRlcigoZW50aXR5Q29uZikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSBoYXNzLnN0YXRlc1tlbnRpdHlDb25mLmVudGl0eV07XG5cbiAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW50aXR5Q29uZi5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZW50aXR5Q29uZi5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgICBpZiAoZXZhbHVhdGVGaWx0ZXIoc3RhdGVPYmosIGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgdGhpcy5fY29uZmlnIS5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgICBpZiAoZXZhbHVhdGVGaWx0ZXIoc3RhdGVPYmosIGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAoZW50aXRpZXNMaXN0Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9jb25maWcuc2hvd19lbXB0eSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9jYXJkRWxlbWVudCgpO1xuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSAhPT0gXCJIVUktRVJST1ItQ0FSRFwiKSB7XG4gICAgICBjb25zdCBpc1NhbWUgPVxuICAgICAgICB0aGlzLl9vbGRFbnRpdGllcyAmJlxuICAgICAgICBlbnRpdGllc0xpc3QubGVuZ3RoID09PSB0aGlzLl9vbGRFbnRpdGllcy5sZW5ndGggJiZcbiAgICAgICAgZW50aXRpZXNMaXN0LmV2ZXJ5KChlbnRpdHksIGlkeCkgPT4gZW50aXR5ID09PSB0aGlzLl9vbGRFbnRpdGllcyFbaWR4XSk7XG5cbiAgICAgIGlmICghaXNTYW1lKSB7XG4gICAgICAgIHRoaXMuX29sZEVudGl0aWVzID0gZW50aXRpZXNMaXN0O1xuICAgICAgICBlbGVtZW50LnNldENvbmZpZyh7IC4uLnRoaXMuX2Jhc2VDYXJkQ29uZmlnISwgZW50aXRpZXM6IGVudGl0aWVzTGlzdCB9KTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5pc1BhbmVsID0gdGhpcy5pc1BhbmVsO1xuICAgICAgZWxlbWVudC5lZGl0TW9kZSA9IHRoaXMuX2VkaXRNb2RlO1xuICAgICAgZWxlbWVudC5oYXNzID0gaGFzcztcbiAgICB9XG5cbiAgICAvLyBBdHRhY2ggZWxlbWVudCBpZiBpdCBoYXMgbmV2ZXIgYmVlbiBhdHRhY2hlZC5cbiAgICBpZiAoIXRoaXMubGFzdENoaWxkKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIHByaXZhdGUgaGF2ZUVudGl0aWVzQ2hhbmdlZChoYXNzOiBIb21lQXNzaXN0YW50KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9oYXNzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZ0VudGl0aWVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNvbmZpZyBvZiB0aGlzLl9jb25maWdFbnRpdGllcykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9oYXNzLnN0YXRlc1tjb25maWcuZW50aXR5XSAhPT0gaGFzcy5zdGF0ZXNbY29uZmlnLmVudGl0eV0gfHxcbiAgICAgICAgdGhpcy5faGFzcy5sb2NhbGl6ZSAhPT0gaGFzcy5sb2NhbGl6ZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmRFbGVtZW50KCk6IExvdmVsYWNlQ2FyZCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50ICYmIHRoaXMuX2NvbmZpZykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNhcmRFbGVtZW50KHRoaXMuX2Jhc2VDYXJkQ29uZmlnISk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaHVpLWVudGl0eS1maWx0ZXItY2FyZFwiLCBFbnRpdHlGaWx0ZXJDYXJkKTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0ZUZpbHRlciA9IChzdGF0ZU9iajogSGFzc0VudGl0eSwgZmlsdGVyOiBhbnkpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb3BlcmF0b3IgPSBmaWx0ZXIub3BlcmF0b3IgfHwgXCI9PVwiO1xuICBjb25zdCB2YWx1ZSA9IGZpbHRlci52YWx1ZSB8fCBmaWx0ZXI7XG4gIGNvbnN0IHN0YXRlID0gZmlsdGVyLmF0dHJpYnV0ZVxuICAgID8gc3RhdGVPYmouYXR0cmlidXRlc1tmaWx0ZXIuYXR0cmlidXRlXVxuICAgIDogc3RhdGVPYmouc3RhdGU7XG5cbiAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgIGNhc2UgXCI9PVwiOlxuICAgICAgcmV0dXJuIHN0YXRlID09PSB2YWx1ZTtcbiAgICBjYXNlIFwiPD1cIjpcbiAgICAgIHJldHVybiBzdGF0ZSA8PSB2YWx1ZTtcbiAgICBjYXNlIFwiPFwiOlxuICAgICAgcmV0dXJuIHN0YXRlIDwgdmFsdWU7XG4gICAgY2FzZSBcIj49XCI6XG4gICAgICByZXR1cm4gc3RhdGUgPj0gdmFsdWU7XG4gICAgY2FzZSBcIj5cIjpcbiAgICAgIHJldHVybiBzdGF0ZSA+IHZhbHVlO1xuICAgIGNhc2UgXCIhPVwiOlxuICAgICAgcmV0dXJuIHN0YXRlICE9PSB2YWx1ZTtcbiAgICBjYXNlIFwicmVnZXhcIjoge1xuICAgICAgcmV0dXJuIHN0YXRlLm1hdGNoKHZhbHVlKTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwS0E7QUFDQTtBQW9LQTs7Ozs7Ozs7Ozs7O0FDNUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWpCQTtBQW1CQTs7OztBIiwic291cmNlUm9vdCI6IiJ9