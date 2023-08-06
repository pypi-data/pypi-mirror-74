(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-suggest-card~more-info-dialog~panel-history~panel-lovelace"],{

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDate = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleDateStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "longDate");

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: formatTime, formatTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeWithSeconds", function() { return formatTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime");
const formatTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumTime");

/***/ }),

/***/ "./src/common/entity/compute_state_display.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/compute_state_display.ts ***!
  \****************************************************/
/*! exports provided: computeStateDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDisplay", function() { return computeStateDisplay; });
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _datetime_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");





const computeStateDisplay = (localize, stateObj, language) => {
  if (stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_0__["UNKNOWN"] || stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_0__["UNAVAILABLE"]) {
    return localize(`state.default.${stateObj.state}`);
  }

  if (stateObj.attributes.unit_of_measurement) {
    return `${stateObj.state} ${stateObj.attributes.unit_of_measurement}`;
  }

  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(stateObj);

  if (domain === "input_datetime") {
    let date;

    if (!stateObj.attributes.has_time) {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day);
      return Object(_datetime_format_date__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, language);
    }

    if (!stateObj.attributes.has_date) {
      const now = new Date();
      date = new Date( // Due to bugs.chromium.org/p/chromium/issues/detail?id=797548
      // don't use artificial 1970 year.
      now.getFullYear(), now.getMonth(), now.getDay(), stateObj.attributes.hour, stateObj.attributes.minute);
      return Object(_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["formatTime"])(date, language);
    }

    date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day, stateObj.attributes.hour, stateObj.attributes.minute);
    return Object(_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_2__["formatDateTime"])(date, language);
  }

  return (// Return device class translation
    stateObj.attributes.device_class && localize(`component.${domain}.state.${stateObj.attributes.device_class}.${stateObj.state}`) || // Return default translation
    localize(`component.${domain}.state._.${stateObj.state}`) || // We don't know! Return the raw state.
    stateObj.state
  );
};

/***/ }),

/***/ "./src/components/entity/ha-chart-base.js":
/*!************************************************!*\
  !*** ./src/components/entity/ha-chart-base.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* eslint-plugin-disable lit */







 // eslint-disable-next-line no-unused-vars

/* global Chart moment Color */

let scriptsLoaded = null;

class HaChartBase extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_0__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  get chart() {
    return this._chart;
  }

  static get properties() {
    return {
      data: Object,
      identifier: String,
      rendered: {
        type: Boolean,
        notify: true,
        value: false,
        readOnly: true
      },
      metas: {
        type: Array,
        value: () => []
      },
      tooltip: {
        type: Object,
        value: () => ({
          opacity: "0",
          left: "0",
          top: "0",
          xPadding: "5",
          yPadding: "3"
        })
      },
      unit: Object,
      rtl: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return ["onPropsChange(data)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.onPropsChange();

    this._resizeListener = () => {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_3__["timeOut"].after(10), () => {
        if (this._isAttached) {
          this.resizeChart();
        }
      });
    };

    if (typeof ResizeObserver === "function") {
      this.resizeObserver = new ResizeObserver(entries => {
        entries.forEach(() => {
          this._resizeListener();
        });
      });
      this.resizeObserver.observe(this.$.chartTarget);
    } else {
      this.addEventListener("iron-resize", this._resizeListener);
    }

    if (scriptsLoaded === null) {
      scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart~panel-calendar"), __webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"));
    }

    scriptsLoaded.then(ChartModule => {
      this.ChartClass = ChartModule.default;
      this.onPropsChange();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._isAttached = false;

    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.$.chartTarget);
    }

    this.removeEventListener("iron-resize", this._resizeListener);

    if (this._resizeTimer !== undefined) {
      clearInterval(this._resizeTimer);
      this._resizeTimer = undefined;
    }
  }

  onPropsChange() {
    if (!this._isAttached || !this.ChartClass || !this.data) {
      return;
    }

    this.drawChart();
  }

  _customTooltips(tooltip) {
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      this.set(["tooltip", "opacity"], 0);
      return;
    } // Set caret Position


    if (tooltip.yAlign) {
      this.set(["tooltip", "yAlign"], tooltip.yAlign);
    } else {
      this.set(["tooltip", "yAlign"], "no-transform");
    }

    const title = tooltip.title ? tooltip.title[0] || "" : "";
    this.set(["tooltip", "title"], title);
    const bodyLines = tooltip.body.map(n => n.lines); // Set Text

    if (tooltip.body) {
      this.set(["tooltip", "lines"], bodyLines.map((body, i) => {
        const colors = tooltip.labelColors[i];
        return {
          color: colors.borderColor,
          bgColor: colors.backgroundColor,
          text: body.join("\n")
        };
      }));
    }

    const parentWidth = this.$.chartTarget.clientWidth;
    let positionX = tooltip.caretX;
    const positionY = this._chart.canvas.offsetTop + tooltip.caretY;

    if (tooltip.caretX + 100 > parentWidth) {
      positionX = parentWidth - 100;
    } else if (tooltip.caretX < 100) {
      positionX = 100;
    }

    positionX += this._chart.canvas.offsetLeft; // Display, position, and set styles for font

    this.tooltip = Object.assign({}, this.tooltip, {
      opacity: 1,
      left: `${positionX}px`,
      top: `${positionY}px`
    });
  }

  _legendClick(event) {
    event = event || window.event;
    event.stopPropagation();
    let target = event.target || event.srcElement;

    while (target.nodeName !== "LI") {
      // user clicked child, find parent LI
      target = target.parentElement;
    }

    const index = event.model.itemsIndex;

    const meta = this._chart.getDatasetMeta(index);

    meta.hidden = meta.hidden === null ? !this._chart.data.datasets[index].hidden : null;
    this.set(["metas", index, "hidden"], this._chart.isDatasetVisible(index) ? null : "hidden");

    this._chart.update();
  }

  _drawLegend() {
    const chart = this._chart; // New data for old graph. Keep metadata.

    const preserveVisibility = this._oldIdentifier && this.identifier === this._oldIdentifier;
    this._oldIdentifier = this.identifier;
    this.set("metas", this._chart.data.datasets.map((x, i) => ({
      label: x.label,
      color: x.color,
      bgColor: x.backgroundColor,
      hidden: preserveVisibility && i < this.metas.length ? this.metas[i].hidden : !chart.isDatasetVisible(i)
    })));
    let updateNeeded = false;

    if (preserveVisibility) {
      for (let i = 0; i < this.metas.length; i++) {
        const meta = chart.getDatasetMeta(i);
        if (!!meta.hidden !== !!this.metas[i].hidden) updateNeeded = true;
        meta.hidden = this.metas[i].hidden ? true : null;
      }
    }

    if (updateNeeded) {
      chart.update();
    }

    this.unit = this.data.unit;
  }

  _formatTickValue(value, index, values) {
    if (values.length === 0) {
      return value;
    }

    const date = new Date(values[index].value);
    return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__["formatTime"])(date);
  }

  drawChart() {
    const data = this.data.data;
    const ctx = this.$.chartCanvas;

    if ((!data.datasets || !data.datasets.length) && !this._chart) {
      return;
    }

    if (this.data.type !== "timeline" && data.datasets.length > 0) {
      const cnt = data.datasets.length;
      const colors = this.constructor.getColorList(cnt);

      for (let loopI = 0; loopI < cnt; loopI++) {
        data.datasets[loopI].borderColor = colors[loopI].rgbString();
        data.datasets[loopI].backgroundColor = colors[loopI].alpha(0.6).rgbaString();
      }
    }

    if (this._chart) {
      this._customTooltips({
        opacity: 0
      });

      this._chart.data = data;

      this._chart.update({
        duration: 0
      });

      if (this.isTimeline) {
        this._chart.options.scales.yAxes[0].gridLines.display = data.length > 1;
      } else if (this.data.legend === true) {
        this._drawLegend();
      }

      this.resizeChart();
    } else {
      if (!data.datasets) {
        return;
      }

      this._customTooltips({
        opacity: 0
      });

      const plugins = [{
        afterRender: () => this._setRendered(true)
      }];
      let options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0
        },
        hover: {
          animationDuration: 0
        },
        responsiveAnimationDuration: 0,
        tooltips: {
          enabled: false,
          custom: this._customTooltips.bind(this)
        },
        legend: {
          display: false
        },
        line: {
          spanGaps: true
        },
        elements: {
          font: "12px 'Roboto', 'sans-serif'"
        },
        ticks: {
          fontFamily: "'Roboto', 'sans-serif'"
        }
      };
      options = Chart.helpers.merge(options, this.data.options);
      options.scales.xAxes[0].ticks.callback = this._formatTickValue;

      if (this.data.type === "timeline") {
        this.set("isTimeline", true);

        if (this.data.colors !== undefined) {
          this._colorFunc = this.constructor.getColorGenerator(this.data.colors.staticColors, this.data.colors.staticColorIndex);
        }

        if (this._colorFunc !== undefined) {
          options.elements.colorFunction = this._colorFunc;
        }

        if (data.datasets.length === 1) {
          if (options.scales.yAxes[0].ticks) {
            options.scales.yAxes[0].ticks.display = false;
          } else {
            options.scales.yAxes[0].ticks = {
              display: false
            };
          }

          if (options.scales.yAxes[0].gridLines) {
            options.scales.yAxes[0].gridLines.display = false;
          } else {
            options.scales.yAxes[0].gridLines = {
              display: false
            };
          }
        }

        this.$.chartTarget.style.height = "50px";
      } else {
        this.$.chartTarget.style.height = "160px";
      }

      const chartData = {
        type: this.data.type,
        data: this.data.data,
        options: options,
        plugins: plugins
      }; // Async resize after dom update

      this._chart = new this.ChartClass(ctx, chartData);

      if (this.isTimeline !== true && this.data.legend === true) {
        this._drawLegend();
      }

      this.resizeChart();
    }
  }

  resizeChart() {
    if (!this._chart) return; // Chart not ready

    if (this._resizeTimer === undefined) {
      this._resizeTimer = setInterval(this.resizeChart.bind(this), 10);
      return;
    }

    clearInterval(this._resizeTimer);
    this._resizeTimer = undefined;

    this._resizeChart();
  }

  _resizeChart() {
    const chartTarget = this.$.chartTarget;
    const options = this.data;
    const data = options.data;

    if (data.datasets.length === 0) {
      return;
    }

    if (!this.isTimeline) {
      this._chart.resize();

      return;
    } // Recalculate chart height for Timeline chart


    const areaTop = this._chart.chartArea.top;
    const areaBot = this._chart.chartArea.bottom;
    const height1 = this._chart.canvas.clientHeight;

    if (areaBot > 0) {
      this._axisHeight = height1 - areaBot + areaTop;
    }

    if (!this._axisHeight) {
      chartTarget.style.height = "50px";

      this._chart.resize();

      this.resizeChart();
      return;
    }

    if (this._axisHeight) {
      const cnt = data.datasets.length;
      const targetHeight = 30 * cnt + this._axisHeight + "px";

      if (chartTarget.style.height !== targetHeight) {
        chartTarget.style.height = targetHeight;
      }

      this._chart.resize();
    }
  } // Get HSL distributed color list


  static getColorList(count) {
    let processL = false;

    if (count > 10) {
      processL = true;
      count = Math.ceil(count / 2);
    }

    const h1 = 360 / count;
    const result = [];

    for (let loopI = 0; loopI < count; loopI++) {
      result[loopI] = Color().hsl(h1 * loopI, 80, 38);

      if (processL) {
        result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
      }
    }

    return result;
  }

  static getColorGenerator(staticColors, startIndex) {
    // Known colors for static data,
    // should add for very common state string manually.
    // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
    const palette = ["ff0029", "66a61e", "377eb8", "984ea3", "00d2d5", "ff7f00", "af8d00", "7f80cd", "b3e900", "c42e60", "a65628", "f781bf", "8dd3c7", "bebada", "fb8072", "80b1d3", "fdb462", "fccde5", "bc80bd", "ffed6f", "c4eaff", "cf8c00", "1b9e77", "d95f02", "e7298a", "e6ab02", "a6761d", "0097ff", "00d067", "f43600", "4ba93b", "5779bb", "927acc", "97ee3f", "bf3947", "9f5b00", "f48758", "8caed6", "f2b94f", "eff26e", "e43872", "d9b100", "9d7a00", "698cff", "d9d9d9", "00d27e", "d06800", "009f82", "c49200", "cbe8ff", "fecddf", "c27eb6", "8cd2ce", "c4b8d9", "f883b0", "a49100", "f48800", "27d0df", "a04a9b"];

    function getColorIndex(idx) {
      // Reuse the color if index too large.
      return Color("#" + palette[idx % palette.length]);
    }

    const colorDict = {};
    let colorIndex = 0;
    if (startIndex > 0) colorIndex = startIndex;

    if (staticColors) {
      Object.keys(staticColors).forEach(c => {
        const c1 = staticColors[c];

        if (isFinite(c1)) {
          colorDict[c.toLowerCase()] = getColorIndex(c1);
        } else {
          colorDict[c.toLowerCase()] = Color(staticColors[c]);
        }
      });
    } // Custom color assign


    function getColor(__, data) {
      let ret;
      const name = data[3];
      if (name === null) return Color().hsl(0, 40, 38);
      if (name === undefined) return Color().hsl(120, 40, 38);
      const name1 = name.toLowerCase();

      if (ret === undefined) {
        ret = colorDict[name1];
      }

      if (ret === undefined) {
        ret = getColorIndex(colorIndex);
        colorIndex++;
        colorDict[name1] = ret;
      }

      return ret;
    }

    return getColor;
  }

}

customElements.define("ha-chart-base", HaChartBase);

/***/ }),

/***/ "./src/components/state-history-chart-line.js":
/*!****************************************************!*\
  !*** ./src/components/state-history-chart-line.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js");


/* eslint-plugin-disable lit */






class StateHistoryChartLine extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <ha-chart-base
        id="chart"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></ha-chart-base>
    `;
  }

  static get properties() {
    return {
      chartData: Object,
      data: Object,
      names: Object,
      unit: String,
      identifier: String,
      isSingleDevice: {
        type: Boolean,
        value: false
      },
      endTime: Object,
      rendered: {
        type: Boolean,
        value: false,
        observer: "_onRenderedChanged"
      }
    };
  }

  static get observers() {
    return ["dataChanged(data, endTime, isSingleDevice)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  _onRenderedChanged(rendered) {
    if (rendered) this.animateHeight();
  }

  animateHeight() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      this.style.height = this.$.chart.scrollHeight + "px";
    }));
  }

  drawChart() {
    const unit = this.unit;
    const deviceStates = this.data;
    const datasets = [];
    let endTime;

    if (!this._isAttached) {
      return;
    }

    if (deviceStates.length === 0) {
      return;
    }

    function safeParseFloat(value) {
      const parsed = parseFloat(value);
      return isFinite(parsed) ? parsed : null;
    }

    endTime = this.endTime || // Get the highest date from the last date of each device
    new Date(Math.max.apply(null, deviceStates.map(devSts => new Date(devSts.states[devSts.states.length - 1].last_changed))));

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const names = this.names || {};
    deviceStates.forEach(states => {
      const domain = states.domain;
      const name = names[states.entity_id] || states.name; // array containing [value1, value2, etc]

      let prevValues;
      const data = [];

      function pushData(timestamp, datavalues) {
        if (!datavalues) return;

        if (timestamp > endTime) {
          // Drop datapoints that are after the requested endTime. This could happen if
          // endTime is "now" and client time is not in sync with server time.
          return;
        }

        data.forEach((d, i) => {
          d.data.push({
            x: timestamp,
            y: datavalues[i]
          });
        });
        prevValues = datavalues;
      }

      function addColumn(nameY, step, fill) {
        let dataFill = false;
        let dataStep = false;

        if (fill) {
          dataFill = "origin";
        }

        if (step) {
          dataStep = "before";
        }

        data.push({
          label: nameY,
          fill: dataFill,
          steppedLine: dataStep,
          pointRadius: 0,
          data: [],
          unitText: unit
        });
      }

      if (domain === "thermostat" || domain === "climate" || domain === "water_heater") {
        const hasHvacAction = states.states.some(state => state.attributes && state.attributes.hvac_action);
        const isHeating = domain === "climate" && hasHvacAction ? state => state.attributes.hvac_action === "heating" : state => state.state === "heat";
        const isCooling = domain === "climate" && hasHvacAction ? state => state.attributes.hvac_action === "cooling" : state => state.state === "cool";
        const hasHeat = states.states.some(isHeating);
        const hasCool = states.states.some(isCooling); // We differentiate between thermostats that have a target temperature
        // range versus ones that have just a target temperature
        // Using step chart by step-before so manually interpolation not needed.

        const hasTargetRange = states.states.some(state => state.attributes && state.attributes.target_temp_high !== state.attributes.target_temp_low);
        addColumn(`${this.hass.localize("ui.card.climate.current_temperature", "name", name)}`, true);

        if (hasHeat) {
          addColumn(`${this.hass.localize("ui.card.climate.heating", "name", name)}`, true, true); // The "heating" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasCool) {
          addColumn(`${this.hass.localize("ui.card.climate.cooling", "name", name)}`, true, true); // The "cooling" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasTargetRange) {
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_mode", "name", name, "mode", this.hass.localize("ui.card.climate.high"))}`, true);
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_mode", "name", name, "mode", this.hass.localize("ui.card.climate.low"))}`, true);
        } else {
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_entity", "name", name)}`, true);
        }

        states.states.forEach(state => {
          if (!state.attributes) return;
          const curTemp = safeParseFloat(state.attributes.current_temperature);
          const series = [curTemp];

          if (hasHeat) {
            series.push(isHeating(state) ? curTemp : null);
          }

          if (hasCool) {
            series.push(isCooling(state) ? curTemp : null);
          }

          if (hasTargetRange) {
            const targetHigh = safeParseFloat(state.attributes.target_temp_high);
            const targetLow = safeParseFloat(state.attributes.target_temp_low);
            series.push(targetHigh, targetLow);
            pushData(new Date(state.last_changed), series);
          } else {
            const target = safeParseFloat(state.attributes.temperature);
            series.push(target);
            pushData(new Date(state.last_changed), series);
          }
        });
      } else {
        // Only disable interpolation for sensors
        const isStep = domain === "sensor";
        addColumn(name, isStep);
        let lastValue = null;
        let lastDate = null;
        let lastNullDate = null; // Process chart data.
        // When state is `unknown`, calculate the value and break the line.

        states.states.forEach(state => {
          const value = safeParseFloat(state.state);
          const date = new Date(state.last_changed);

          if (value !== null && lastNullDate !== null) {
            const dateTime = date.getTime();
            const lastNullDateTime = lastNullDate.getTime();
            const lastDateTime = lastDate.getTime();
            const tmpValue = (value - lastValue) * ((lastNullDateTime - lastDateTime) / (dateTime - lastDateTime)) + lastValue;
            pushData(lastNullDate, [tmpValue]);
            pushData(new Date(lastNullDateTime + 1), [null]);
            pushData(date, [value]);
            lastDate = date;
            lastValue = value;
            lastNullDate = null;
          } else if (value !== null && lastNullDate === null) {
            pushData(date, [value]);
            lastDate = date;
            lastValue = value;
          } else if (value === null && lastNullDate === null && lastValue !== null) {
            lastNullDate = date;
          }
        });
      } // Add an entry for final values


      pushData(endTime, prevValues, false); // Concat two arrays

      Array.prototype.push.apply(datasets, data);
    });

    const formatTooltipTitle = (items, data) => {
      const item = items[0];
      const date = data.datasets[item.datasetIndex].data[item.index].x;
      return Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__["formatDateTimeWithSeconds"])(date, this.hass.language);
    };

    const chartOptions = {
      type: "line",
      unit: unit,
      legend: !this.isSingleDevice,
      options: {
        scales: {
          xAxes: [{
            type: "time",
            ticks: {
              major: {
                fontStyle: "bold"
              }
            }
          }],
          yAxes: [{
            ticks: {
              maxTicksLimit: 7
            }
          }]
        },
        tooltips: {
          mode: "neareach",
          callbacks: {
            title: formatTooltipTitle
          }
        },
        hover: {
          mode: "neareach"
        },
        layout: {
          padding: {
            top: 5
          }
        },
        elements: {
          line: {
            tension: 0.1,
            pointRadius: 0,
            borderWidth: 1.5
          },
          point: {
            hitRadius: 5
          }
        },
        plugins: {
          filler: {
            propagate: true
          }
        }
      },
      data: {
        labels: [],
        datasets: datasets
      }
    };
    this.chartData = chartOptions;
  }

}

customElements.define("state-history-chart-line", StateHistoryChartLine);

/***/ }),

/***/ "./src/components/state-history-chart-timeline.js":
/*!********************************************************!*\
  !*** ./src/components/state-history-chart-timeline.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js");


/* eslint-plugin-disable lit */







class StateHistoryChartTimeline extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        ha-chart-base {
          direction: ltr;
        }
      </style>
      <ha-chart-base
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></ha-chart-base>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      chartData: Object,
      data: {
        type: Object,
        observer: "dataChanged"
      },
      names: Object,
      noSingle: Boolean,
      endTime: Date,
      rendered: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      rtl: {
        reflectToAttribute: true,
        computed: "_computeRTL(hass)"
      }
    };
  }

  static get observers() {
    return ["dataChanged(data, endTime, localize, language)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  drawChart() {
    const staticColors = {
      on: 1,
      off: 0,
      unavailable: "#a0a0a0",
      unknown: "#606060",
      idle: 2
    };
    let stateHistory = this.data;

    if (!this._isAttached) {
      return;
    }

    if (!stateHistory) {
      stateHistory = [];
    }

    const startTime = new Date(stateHistory.reduce((minTime, stateInfo) => Math.min(minTime, new Date(stateInfo.data[0].last_changed)), new Date())); // end time is Math.max(startTime, last_event)

    let endTime = this.endTime || new Date(stateHistory.reduce((maxTime, stateInfo) => Math.max(maxTime, new Date(stateInfo.data[stateInfo.data.length - 1].last_changed)), startTime));

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const labels = [];
    const datasets = []; // stateHistory is a list of lists of sorted state objects

    const names = this.names || {};
    stateHistory.forEach(stateInfo => {
      let newLastChanged;
      let prevState = null;
      let locState = null;
      let prevLastChanged = startTime;
      const entityDisplay = names[stateInfo.entity_id] || stateInfo.name;
      const dataRow = [];
      stateInfo.data.forEach(state => {
        let newState = state.state;
        const timeStamp = new Date(state.last_changed);

        if (newState === undefined || newState === "") {
          newState = null;
        }

        if (timeStamp > endTime) {
          // Drop datapoints that are after the requested endTime. This could happen if
          // endTime is 'now' and client time is not in sync with server time.
          return;
        }

        if (prevState !== null && newState !== prevState) {
          newLastChanged = new Date(state.last_changed);
          dataRow.push([prevLastChanged, newLastChanged, locState, prevState]);
          prevState = newState;
          locState = state.state_localize;
          prevLastChanged = newLastChanged;
        } else if (prevState === null) {
          prevState = newState;
          locState = state.state_localize;
          prevLastChanged = new Date(state.last_changed);
        }
      });

      if (prevState !== null) {
        dataRow.push([prevLastChanged, endTime, locState, prevState]);
      }

      datasets.push({
        data: dataRow
      });
      labels.push(entityDisplay);
    });

    const formatTooltipLabel = (item, data) => {
      const values = data.datasets[item.datasetIndex].data[item.index];
      const start = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__["formatDateTimeWithSeconds"])(values[0], this.hass.language);
      const end = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__["formatDateTimeWithSeconds"])(values[1], this.hass.language);
      const state = values[2];
      return [state, start, end];
    };

    const chartOptions = {
      type: "timeline",
      options: {
        tooltips: {
          callbacks: {
            label: formatTooltipLabel
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              major: {
                fontStyle: "bold"
              }
            }
          }],
          yAxes: [{
            afterSetDimensions: yaxe => {
              yaxe.maxWidth = yaxe.chart.width * 0.18;
            },
            position: this._computeRTL ? "right" : "left"
          }]
        }
      },
      data: {
        labels: labels,
        datasets: datasets
      },
      colors: {
        staticColors: staticColors,
        staticColorIndex: 3
      }
    };
    this.chartData = chartOptions;
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__["computeRTL"])(hass);
  }

}

customElements.define("state-history-chart-timeline", StateHistoryChartTimeline);

/***/ }),

/***/ "./src/components/state-history-charts.js":
/*!************************************************!*\
  !*** ./src/components/state-history-charts.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _state_history_chart_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-history-chart-line */ "./src/components/state-history-chart-line.js");
/* harmony import */ var _state_history_chart_timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-history-chart-timeline */ "./src/components/state-history-chart-timeline.js");


/* eslint-plugin-disable lit */






class StateHistoryCharts extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /* height of single timeline chart = 58px */
          min-height: 58px;
        }
        .info {
          text-align: center;
          line-height: 58px;
          color: var(--secondary-text-color);
        }
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          hass="[[hass]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          hass="[[hass]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      historyData: {
        type: Object,
        value: null
      },
      names: Object,
      isLoadingData: Boolean,
      endTime: {
        type: Object
      },
      upToNow: Boolean,
      noSingle: Boolean
    };
  }

  _computeIsSingleLineChart(data, noSingle) {
    return !noSingle && data && data.length === 1;
  }

  _computeIsEmpty(isLoadingData, historyData) {
    const historyDataEmpty = !historyData || !historyData.timeline || !historyData.line || historyData.timeline.length === 0 && historyData.line.length === 0;
    return !isLoadingData && historyDataEmpty;
  }

  _computeIsLoading(isLoading) {
    return isLoading && !this.historyData;
  }

  _computeEndTime(endTime, upToNow) {
    // We don't really care about the value of historyData, but if it change we want to update
    // endTime.
    return upToNow ? new Date() : endTime;
  }

}

customElements.define("state-history-charts", StateHistoryCharts);

/***/ }),

/***/ "./src/data/cached-history.ts":
/*!************************************!*\
  !*** ./src/data/cached-history.ts ***!
  \************************************/
/*! exports provided: getRecent, getRecentWithCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecent", function() { return getRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentWithCache", function() { return getRecentWithCache; });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");

const RECENT_THRESHOLD = 60000; // 1 minute

const RECENT_CACHE = {};
const stateHistoryCache = {}; // Cached type 1 unction. Without cache config.

const getRecent = (hass, entityId, startTime, endTime, localize, language) => {
  const cacheKey = entityId;
  const cache = RECENT_CACHE[cacheKey];

  if (cache && Date.now() - cache.created < RECENT_THRESHOLD && cache.language === language) {
    return cache.data;
  }

  const prom = Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, startTime, endTime).then(stateHistory => Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, stateHistory, localize, language), err => {
    delete RECENT_CACHE[entityId];
    throw err;
  });
  RECENT_CACHE[cacheKey] = {
    created: Date.now(),
    language,
    data: prom
  };
  return prom;
}; // Cache type 2 functionality

function getEmptyCache(language, startTime, endTime) {
  return {
    prom: Promise.resolve({
      line: [],
      timeline: []
    }),
    language,
    startTime,
    endTime,
    data: {
      line: [],
      timeline: []
    }
  };
}

const getRecentWithCache = (hass, entityId, cacheConfig, localize, language) => {
  const cacheKey = cacheConfig.cacheKey;
  const endTime = new Date();
  const startTime = new Date(endTime);
  startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
  let toFetchStartTime = startTime;
  let appendingToCache = false;
  let cache = stateHistoryCache[cacheKey];

  if (cache && toFetchStartTime >= cache.startTime && toFetchStartTime <= cache.endTime && cache.language === language) {
    toFetchStartTime = cache.endTime;
    appendingToCache = true; // This pretty much never happens as endTime is usually set to now

    if (endTime <= cache.endTime) {
      return cache.prom;
    }
  } else {
    cache = stateHistoryCache[cacheKey] = getEmptyCache(language, startTime, endTime);
  }

  const curCacheProm = cache.prom;

  const genProm = async () => {
    let fetchedHistory;

    try {
      const results = await Promise.all([curCacheProm, Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, toFetchStartTime, endTime, appendingToCache)]);
      fetchedHistory = results[1];
    } catch (err) {
      delete stateHistoryCache[cacheKey];
      throw err;
    }

    const stateHistory = Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, fetchedHistory, localize, language);

    if (appendingToCache) {
      mergeLine(stateHistory.line, cache.data.line);
      mergeTimeline(stateHistory.timeline, cache.data.timeline);
      pruneStartTime(startTime, cache.data);
    } else {
      cache.data = stateHistory;
    }

    return cache.data;
  };

  cache.prom = genProm();
  cache.startTime = startTime;
  cache.endTime = endTime;
  return cache.prom;
};

const mergeLine = (historyLines, cacheLines) => {
  historyLines.forEach(line => {
    const unit = line.unit;
    const oldLine = cacheLines.find(cacheLine => cacheLine.unit === unit);

    if (oldLine) {
      line.data.forEach(entity => {
        const oldEntity = oldLine.data.find(cacheEntity => entity.entity_id === cacheEntity.entity_id);

        if (oldEntity) {
          oldEntity.states = oldEntity.states.concat(entity.states);
        } else {
          oldLine.data.push(entity);
        }
      });
    } else {
      cacheLines.push(line);
    }
  });
};

const mergeTimeline = (historyTimelines, cacheTimelines) => {
  historyTimelines.forEach(timeline => {
    const oldTimeline = cacheTimelines.find(cacheTimeline => cacheTimeline.entity_id === timeline.entity_id);

    if (oldTimeline) {
      oldTimeline.data = oldTimeline.data.concat(timeline.data);
    } else {
      cacheTimelines.push(timeline);
    }
  });
};

const pruneArray = (originalStartTime, arr) => {
  if (arr.length === 0) {
    return arr;
  }

  const changedAfterStartTime = arr.findIndex(state => new Date(state.last_changed) > originalStartTime);

  if (changedAfterStartTime === 0) {
    // If all changes happened after originalStartTime then we are done.
    return arr;
  } // If all changes happened at or before originalStartTime. Use last index.


  const updateIndex = changedAfterStartTime === -1 ? arr.length - 1 : changedAfterStartTime - 1;
  arr[updateIndex].last_changed = originalStartTime;
  return arr.slice(updateIndex);
};

const pruneStartTime = (originalStartTime, cacheData) => {
  cacheData.line.forEach(line => {
    line.data.forEach(entity => {
      entity.states = pruneArray(originalStartTime, entity.states);
    });
  });
  cacheData.timeline.forEach(timeline => {
    timeline.data = pruneArray(originalStartTime, timeline.data);
  });
};

/***/ }),

/***/ "./src/data/ha-state-history-data.js":
/*!*******************************************!*\
  !*** ./src/data/ha-state-history-data.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _cached_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cached-history */ "./src/data/cached-history.ts");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");


/* eslint-plugin-disable lit */





/*
 * @appliesMixin LocalizeMixin
 */

class HaStateHistoryData extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "hassChanged"
      },
      filterType: String,
      cacheConfig: Object,
      startTime: Date,
      endTime: Date,
      entityId: String,
      isLoading: {
        type: Boolean,
        value: true,
        readOnly: true,
        notify: true
      },
      data: {
        type: Object,
        value: null,
        readOnly: true,
        notify: true
      }
    };
  }

  static get observers() {
    return ["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
  }

  disconnectedCallback() {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }

    super.disconnectedCallback();
  }

  hassChanged(newHass, oldHass) {
    if (!oldHass && !this._madeFirstCall) {
      this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
    }
  }

  filterChangedDebouncer(...args) {
    this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this._debounceFilterChanged, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(0), () => {
      this.filterChanged(...args);
    });
  }

  filterChanged(filterType, entityId, startTime, endTime, cacheConfig, localize) {
    if (!this.hass) {
      return;
    }

    if (cacheConfig && !cacheConfig.cacheKey) {
      return;
    }

    if (!localize) {
      return;
    }

    this._madeFirstCall = true;
    const language = this.hass.language;
    let data;

    if (filterType === "date") {
      if (!startTime || !endTime) return;
      data = Object(_history__WEBPACK_IMPORTED_MODULE_5__["fetchDate"])(this.hass, startTime, endTime).then(dateHistory => Object(_history__WEBPACK_IMPORTED_MODULE_5__["computeHistory"])(this.hass, dateHistory, localize, language));
    } else if (filterType === "recent-entity") {
      if (!entityId) return;

      if (cacheConfig) {
        data = this.getRecentWithCacheRefresh(entityId, cacheConfig, localize, language);
      } else {
        data = Object(_cached_history__WEBPACK_IMPORTED_MODULE_4__["getRecent"])(this.hass, entityId, startTime, endTime, localize, language);
      }
    } else {
      return;
    }

    this._setIsLoading(true);

    data.then(stateHistory => {
      this._setData(stateHistory);

      this._setIsLoading(false);
    });
  }

  getRecentWithCacheRefresh(entityId, cacheConfig, localize, language) {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }

    if (cacheConfig.refresh) {
      this._refreshTimeoutId = window.setInterval(() => {
        Object(_cached_history__WEBPACK_IMPORTED_MODULE_4__["getRecentWithCache"])(this.hass, entityId, cacheConfig, localize, language).then(stateHistory => {
          this._setData(Object.assign({}, stateHistory));
        });
      }, cacheConfig.refresh * 1000);
    }

    return Object(_cached_history__WEBPACK_IMPORTED_MODULE_4__["getRecentWithCache"])(this.hass, entityId, cacheConfig, localize, language);
  }

}

customElements.define("ha-state-history-data", HaStateHistoryData);

/***/ }),

/***/ "./src/data/history.ts":
/*!*****************************!*\
  !*** ./src/data/history.ts ***!
  \*****************************/
/*! exports provided: fetchRecent, fetchDate, computeHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecent", function() { return fetchRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDate", function() { return fetchDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHistory", function() { return computeHistory; });
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");



const DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
const LINE_ATTRIBUTES_TO_KEEP = ["temperature", "current_temperature", "target_temp_low", "target_temp_high", "hvac_action"];
const fetchRecent = (hass, entityId, startTime, endTime, skipInitialState = false, significantChangesOnly) => {
  let url = "history/period";

  if (startTime) {
    url += "/" + startTime.toISOString();
  }

  url += "?filter_entity_id=" + entityId;

  if (endTime) {
    url += "&end_time=" + endTime.toISOString();
  }

  if (skipInitialState) {
    url += "&skip_initial_state";
  }

  if (significantChangesOnly !== undefined) {
    url += `&significant_changes_only=${Number(significantChangesOnly)}`;
  }

  return hass.callApi("GET", url);
};
const fetchDate = (hass, startTime, endTime) => {
  return hass.callApi("GET", `history/period/${startTime.toISOString()}?end_time=${endTime.toISOString()}`);
};

const equalState = (obj1, obj2) => obj1.state === obj2.state && ( // They either both have an attributes object or not
!obj1.attributes || LINE_ATTRIBUTES_TO_KEEP.every(attr => obj1.attributes[attr] === obj2.attributes[attr]));

const processTimelineEntity = (localize, language, states) => {
  const data = [];

  for (const state of states) {
    if (data.length > 0 && state.state === data[data.length - 1].state) {
      continue;
    }

    data.push({
      state_localize: Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_0__["computeStateDisplay"])(localize, state, language),
      state: state.state,
      last_changed: state.last_changed
    });
  }

  return {
    name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(states[0]),
    entity_id: states[0].entity_id,
    data
  };
};

const processLineChartEntities = (unit, entities) => {
  const data = [];

  for (const states of entities) {
    const last = states[states.length - 1];
    const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(last);
    const processedStates = [];

    for (const state of states) {
      let processedState;

      if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
        processedState = {
          state: state.state,
          last_changed: state.last_updated,
          attributes: {}
        };

        for (const attr of LINE_ATTRIBUTES_TO_KEEP) {
          if (attr in state.attributes) {
            processedState.attributes[attr] = state.attributes[attr];
          }
        }
      } else {
        processedState = state;
      }

      if (processedStates.length > 1 && equalState(processedState, processedStates[processedStates.length - 1]) && equalState(processedState, processedStates[processedStates.length - 2])) {
        continue;
      }

      processedStates.push(processedState);
    }

    data.push({
      domain,
      name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(last),
      entity_id: last.entity_id,
      states: processedStates
    });
  }

  return {
    unit,
    identifier: entities.map(states => states[0].entity_id).join(""),
    data
  };
};

const computeHistory = (hass, stateHistory, localize, language) => {
  const lineChartDevices = {};
  const timelineDevices = [];

  if (!stateHistory) {
    return {
      line: [],
      timeline: []
    };
  }

  stateHistory.forEach(stateInfo => {
    if (stateInfo.length === 0) {
      return;
    }

    const stateWithUnit = stateInfo.find(state => "unit_of_measurement" in state.attributes);
    let unit;

    if (stateWithUnit) {
      unit = stateWithUnit.attributes.unit_of_measurement;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "climate") {
      unit = hass.config.unit_system.temperature;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "water_heater") {
      unit = hass.config.unit_system.temperature;
    }

    if (!unit) {
      timelineDevices.push(processTimelineEntity(localize, language, stateInfo));
    } else if (unit in lineChartDevices) {
      lineChartDevices[unit].push(stateInfo);
    } else {
      lineChartDevices[unit] = [stateInfo];
    }
  });
  const unitStates = Object.keys(lineChartDevices).map(unit => processLineChartEntities(unit, lineChartDevices[unit]));
  return {
    line: unitStates,
    timeline: timelineDevices
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmR+bW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1oaXN0b3J5fnBhbmVsLWxvdmVsYWNlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtY2hhcnQtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jYWNoZWQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9oYS1zdGF0ZS1oaXN0b3J5LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaGlzdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5pbXBvcnQgeyB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgfSBmcm9tIFwiLi9jaGVja19vcHRpb25zX3N1cHBvcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZURhdGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwibG9uZ0RhdGVcIik7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5pbXBvcnQgeyB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMgfSBmcm9tIFwiLi9jaGVja19vcHRpb25zX3N1cHBvcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcInNob3J0VGltZVwiKTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVXaXRoU2Vjb25kcyA9IHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9uc1xuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwibWVkaXVtVGltZVwiKTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBVTkFWQUlMQUJMRSwgVU5LTk9XTiB9IGZyb20gXCIuLi8uLi9kYXRhL2VudGl0eVwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZVRpbWUgfSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuLi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURpc3BsYXkgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5LFxuICBsYW5ndWFnZTogc3RyaW5nXG4pOiBzdHJpbmcgPT4ge1xuICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFVOS05PV04gfHwgc3RhdGVPYmouc3RhdGUgPT09IFVOQVZBSUxBQkxFKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZS5kZWZhdWx0LiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gIH1cblxuICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50KSB7XG4gICAgcmV0dXJuIGAke3N0YXRlT2JqLnN0YXRlfSAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudH1gO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcblxuICBpZiAoZG9tYWluID09PSBcImlucHV0X2RhdGV0aW1lXCIpIHtcbiAgICBsZXQgZGF0ZTogRGF0ZTtcbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vbnRoIC0gMSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICAgICk7XG4gICAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfVxuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgLy8gRHVlIHRvIGJ1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTc1NDhcbiAgICAgICAgLy8gZG9uJ3QgdXNlIGFydGlmaWNpYWwgMTk3MCB5ZWFyLlxuICAgICAgICBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgbm93LmdldE1vbnRoKCksXG4gICAgICAgIG5vdy5nZXREYXkoKSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbnV0ZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBmb3JtYXRUaW1lKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBkYXRlID0gbmV3IERhdGUoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vbnRoIC0gMSxcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5LFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyLFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5taW51dGVcbiAgICApO1xuICAgIHJldHVybiBmb3JtYXREYXRlVGltZShkYXRlLCBsYW5ndWFnZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIC8vIFJldHVybiBkZXZpY2UgY2xhc3MgdHJhbnNsYXRpb25cbiAgICAoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgJiZcbiAgICAgIGxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LiR7ZG9tYWlufS5zdGF0ZS4ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzfS4ke3N0YXRlT2JqLnN0YXRlfWBcbiAgICAgICkpIHx8XG4gICAgLy8gUmV0dXJuIGRlZmF1bHQgdHJhbnNsYXRpb25cbiAgICBsb2NhbGl6ZShgY29tcG9uZW50LiR7ZG9tYWlufS5zdGF0ZS5fLiR7c3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAvLyBXZSBkb24ndCBrbm93ISBSZXR1cm4gdGhlIHJhdyBzdGF0ZS5cbiAgICBzdGF0ZU9iai5zdGF0ZVxuICApO1xufTtcbiIsIi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IElyb25SZXNpemFibGVCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKiBnbG9iYWwgQ2hhcnQgbW9tZW50IENvbG9yICovXG5cbmxldCBzY3JpcHRzTG9hZGVkID0gbnVsbDtcblxuY2xhc3MgSGFDaGFydEJhc2UgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhcbiAgW0lyb25SZXNpemFibGVCZWhhdmlvcl0sXG4gIFBvbHltZXJFbGVtZW50XG4pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciB7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDAgMCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIgPiBkaXYge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2LmNoYXJ0VGl0bGUge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgZmxleDogMCAwIDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2LmNoYXJ0TGVnZW5kIHtcbiAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgbWluLXdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0VG9vbHRpcCB7XG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MCwgODAsIDgwLCAwLjkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTJweCk7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcnRsXSkgLmNoYXJ0VG9vbHRpcCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIHVsLFxuICAgICAgICAuY2hhcnRUb29sdGlwIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCAwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMCAwIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0VG9vbHRpcCBsaSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAgLnRpdGxlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQ5JTtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGk6bnRoLWNoaWxkKG9kZCk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAvKiBNYWtlIGxhc3QgaXRlbSB0YWtlIGZ1bGwgd2lkdGggaWYgaXQgaXMgb2RkLW51bWJlcmVkLiAqL1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGlbZGF0YS1oaWRkZW5dIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgZW0sXG4gICAgICAgIC5jaGFydFRvb2x0aXAgZW0ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtydGxdKSAuY2hhcnRUb29sdGlwIGVtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1t1bml0XV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0SGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0VGl0bGVcIj5bW3VuaXRdXTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydExlZ2VuZFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW21ldGFzXV1cIj5cbiAgICAgICAgICAgICAgICA8bGkgb24tY2xpY2s9XCJfbGVnZW5kQ2xpY2tcIiBkYXRhLWhpZGRlbiQ9XCJbW2l0ZW0uaGlkZGVuXV1cIj5cbiAgICAgICAgICAgICAgICAgIDxlbSBzdHlsZSQ9XCJiYWNrZ3JvdW5kLWNvbG9yOltbaXRlbS5iZ0NvbG9yXV1cIj48L2VtPlxuICAgICAgICAgICAgICAgICAgW1tpdGVtLmxhYmVsXV1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiBpZD1cImNoYXJ0VGFyZ2V0XCIgc3R5bGU9XCJoZWlnaHQ6NDBweDsgd2lkdGg6MTAwJVwiPlxuICAgICAgICA8Y2FudmFzIGlkPVwiY2hhcnRDYW52YXNcIj48L2NhbnZhcz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzJD1cImNoYXJ0VG9vbHRpcCBbW3Rvb2x0aXAueUFsaWduXV1cIlxuICAgICAgICAgIHN0eWxlJD1cIm9wYWNpdHk6W1t0b29sdGlwLm9wYWNpdHldXTsgdG9wOltbdG9vbHRpcC50b3BdXTsgbGVmdDpbW3Rvb2x0aXAubGVmdF1dOyBwYWRkaW5nOltbdG9vbHRpcC55UGFkZGluZ11dcHggW1t0b29sdGlwLnhQYWRkaW5nXV1weFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5bW3Rvb2x0aXAudGl0bGVdXTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdG9vbHRpcC5saW5lc11dXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGVtIHN0eWxlJD1cImJhY2tncm91bmQtY29sb3I6W1tpdGVtLmJnQ29sb3JdXVwiPjwvZW1cbiAgICAgICAgICAgICAgICAgID5bW2l0ZW0udGV4dF1dXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGdldCBjaGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IE9iamVjdCxcbiAgICAgIGlkZW50aWZpZXI6IFN0cmluZyxcbiAgICAgIHJlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBtZXRhczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogKCkgPT4gKHtcbiAgICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIHhQYWRkaW5nOiBcIjVcIixcbiAgICAgICAgICB5UGFkZGluZzogXCIzXCIsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICAgIHVuaXQ6IE9iamVjdCxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wib25Qcm9wc0NoYW5nZShkYXRhKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5vblByb3BzQ2hhbmdlKCk7XG4gICAgdGhpcy5fcmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9kZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICAgIHRoaXMuX2RlYm91bmNlcixcbiAgICAgICAgdGltZU91dC5hZnRlcigxMCksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiQuY2hhcnRUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJpcm9uLXJlc2l6ZVwiLCB0aGlzLl9yZXNpemVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgaWYgKHNjcmlwdHNMb2FkZWQgPT09IG51bGwpIHtcbiAgICAgIHNjcmlwdHNMb2FkZWQgPSBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9hZF9jaGFydFwiICovIFwiLi4vLi4vcmVzb3VyY2VzL2hhLWNoYXJ0LXNjcmlwdHMuanNcIlxuICAgICAgKTtcbiAgICB9XG4gICAgc2NyaXB0c0xvYWRlZC50aGVuKChDaGFydE1vZHVsZSkgPT4ge1xuICAgICAgdGhpcy5DaGFydENsYXNzID0gQ2hhcnRNb2R1bGUuZGVmYXVsdDtcbiAgICAgIHRoaXMub25Qcm9wc0NoYW5nZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuJC5jaGFydFRhcmdldCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaXJvbi1yZXNpemVcIiwgdGhpcy5fcmVzaXplTGlzdGVuZXIpO1xuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcmVzaXplVGltZXIpO1xuICAgICAgdGhpcy5fcmVzaXplVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgb25Qcm9wc0NoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWQgfHwgIXRoaXMuQ2hhcnRDbGFzcyB8fCAhdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBfY3VzdG9tVG9vbHRpcHModG9vbHRpcCkge1xuICAgIC8vIEhpZGUgaWYgbm8gdG9vbHRpcFxuICAgIGlmICh0b29sdGlwLm9wYWNpdHkgPT09IDApIHtcbiAgICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJvcGFjaXR5XCJdLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2V0IGNhcmV0IFBvc2l0aW9uXG4gICAgaWYgKHRvb2x0aXAueUFsaWduKSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwieUFsaWduXCJdLCB0b29sdGlwLnlBbGlnbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJ5QWxpZ25cIl0sIFwibm8tdHJhbnNmb3JtXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gdG9vbHRpcC50aXRsZSA/IHRvb2x0aXAudGl0bGVbMF0gfHwgXCJcIiA6IFwiXCI7XG4gICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcInRpdGxlXCJdLCB0aXRsZSk7XG5cbiAgICBjb25zdCBib2R5TGluZXMgPSB0b29sdGlwLmJvZHkubWFwKChuKSA9PiBuLmxpbmVzKTtcblxuICAgIC8vIFNldCBUZXh0XG4gICAgaWYgKHRvb2x0aXAuYm9keSkge1xuICAgICAgdGhpcy5zZXQoXG4gICAgICAgIFtcInRvb2x0aXBcIiwgXCJsaW5lc1wiXSxcbiAgICAgICAgYm9keUxpbmVzLm1hcCgoYm9keSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IHRvb2x0aXAubGFiZWxDb2xvcnNbaV07XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMuYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBiZ0NvbG9yOiBjb2xvcnMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgdGV4dDogYm9keS5qb2luKFwiXFxuXCIpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHRoaXMuJC5jaGFydFRhcmdldC5jbGllbnRXaWR0aDtcbiAgICBsZXQgcG9zaXRpb25YID0gdG9vbHRpcC5jYXJldFg7XG4gICAgY29uc3QgcG9zaXRpb25ZID0gdGhpcy5fY2hhcnQuY2FudmFzLm9mZnNldFRvcCArIHRvb2x0aXAuY2FyZXRZO1xuICAgIGlmICh0b29sdGlwLmNhcmV0WCArIDEwMCA+IHBhcmVudFdpZHRoKSB7XG4gICAgICBwb3NpdGlvblggPSBwYXJlbnRXaWR0aCAtIDEwMDtcbiAgICB9IGVsc2UgaWYgKHRvb2x0aXAuY2FyZXRYIDwgMTAwKSB7XG4gICAgICBwb3NpdGlvblggPSAxMDA7XG4gICAgfVxuICAgIHBvc2l0aW9uWCArPSB0aGlzLl9jaGFydC5jYW52YXMub2Zmc2V0TGVmdDtcbiAgICAvLyBEaXNwbGF5LCBwb3NpdGlvbiwgYW5kIHNldCBzdHlsZXMgZm9yIGZvbnRcbiAgICB0aGlzLnRvb2x0aXAgPSB7XG4gICAgICAuLi50aGlzLnRvb2x0aXAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgbGVmdDogYCR7cG9zaXRpb25YfXB4YCxcbiAgICAgIHRvcDogYCR7cG9zaXRpb25ZfXB4YCxcbiAgICB9O1xuICB9XG5cbiAgX2xlZ2VuZENsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXQubm9kZU5hbWUgIT09IFwiTElcIikge1xuICAgICAgLy8gdXNlciBjbGlja2VkIGNoaWxkLCBmaW5kIHBhcmVudCBMSVxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gZXZlbnQubW9kZWwuaXRlbXNJbmRleDtcblxuICAgIGNvbnN0IG1ldGEgPSB0aGlzLl9jaGFydC5nZXREYXRhc2V0TWV0YShpbmRleCk7XG4gICAgbWV0YS5oaWRkZW4gPVxuICAgICAgbWV0YS5oaWRkZW4gPT09IG51bGwgPyAhdGhpcy5fY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0uaGlkZGVuIDogbnVsbDtcbiAgICB0aGlzLnNldChcbiAgICAgIFtcIm1ldGFzXCIsIGluZGV4LCBcImhpZGRlblwiXSxcbiAgICAgIHRoaXMuX2NoYXJ0LmlzRGF0YXNldFZpc2libGUoaW5kZXgpID8gbnVsbCA6IFwiaGlkZGVuXCJcbiAgICApO1xuICAgIHRoaXMuX2NoYXJ0LnVwZGF0ZSgpO1xuICB9XG5cbiAgX2RyYXdMZWdlbmQoKSB7XG4gICAgY29uc3QgY2hhcnQgPSB0aGlzLl9jaGFydDtcbiAgICAvLyBOZXcgZGF0YSBmb3Igb2xkIGdyYXBoLiBLZWVwIG1ldGFkYXRhLlxuICAgIGNvbnN0IHByZXNlcnZlVmlzaWJpbGl0eSA9XG4gICAgICB0aGlzLl9vbGRJZGVudGlmaWVyICYmIHRoaXMuaWRlbnRpZmllciA9PT0gdGhpcy5fb2xkSWRlbnRpZmllcjtcbiAgICB0aGlzLl9vbGRJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyO1xuICAgIHRoaXMuc2V0KFxuICAgICAgXCJtZXRhc1wiLFxuICAgICAgdGhpcy5fY2hhcnQuZGF0YS5kYXRhc2V0cy5tYXAoKHgsIGkpID0+ICh7XG4gICAgICAgIGxhYmVsOiB4LmxhYmVsLFxuICAgICAgICBjb2xvcjogeC5jb2xvcixcbiAgICAgICAgYmdDb2xvcjogeC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGhpZGRlbjpcbiAgICAgICAgICBwcmVzZXJ2ZVZpc2liaWxpdHkgJiYgaSA8IHRoaXMubWV0YXMubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMubWV0YXNbaV0uaGlkZGVuXG4gICAgICAgICAgICA6ICFjaGFydC5pc0RhdGFzZXRWaXNpYmxlKGkpLFxuICAgICAgfSkpXG4gICAgKTtcbiAgICBsZXQgdXBkYXRlTmVlZGVkID0gZmFsc2U7XG4gICAgaWYgKHByZXNlcnZlVmlzaWJpbGl0eSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1ldGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBjaGFydC5nZXREYXRhc2V0TWV0YShpKTtcbiAgICAgICAgaWYgKCEhbWV0YS5oaWRkZW4gIT09ICEhdGhpcy5tZXRhc1tpXS5oaWRkZW4pIHVwZGF0ZU5lZWRlZCA9IHRydWU7XG4gICAgICAgIG1ldGEuaGlkZGVuID0gdGhpcy5tZXRhc1tpXS5oaWRkZW4gPyB0cnVlIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVwZGF0ZU5lZWRlZCkge1xuICAgICAgY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuICAgIHRoaXMudW5pdCA9IHRoaXMuZGF0YS51bml0O1xuICB9XG5cbiAgX2Zvcm1hdFRpY2tWYWx1ZSh2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZXNbaW5kZXhdLnZhbHVlKTtcbiAgICByZXR1cm4gZm9ybWF0VGltZShkYXRlKTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmRhdGE7XG4gICAgY29uc3QgY3R4ID0gdGhpcy4kLmNoYXJ0Q2FudmFzO1xuXG4gICAgaWYgKCghZGF0YS5kYXRhc2V0cyB8fCAhZGF0YS5kYXRhc2V0cy5sZW5ndGgpICYmICF0aGlzLl9jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnR5cGUgIT09IFwidGltZWxpbmVcIiAmJiBkYXRhLmRhdGFzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNudCA9IGRhdGEuZGF0YXNldHMubGVuZ3RoO1xuICAgICAgY29uc3QgY29sb3JzID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRDb2xvckxpc3QoY250KTtcbiAgICAgIGZvciAobGV0IGxvb3BJID0gMDsgbG9vcEkgPCBjbnQ7IGxvb3BJKyspIHtcbiAgICAgICAgZGF0YS5kYXRhc2V0c1tsb29wSV0uYm9yZGVyQ29sb3IgPSBjb2xvcnNbbG9vcEldLnJnYlN0cmluZygpO1xuICAgICAgICBkYXRhLmRhdGFzZXRzW2xvb3BJXS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbbG9vcEldXG4gICAgICAgICAgLmFscGhhKDAuNilcbiAgICAgICAgICAucmdiYVN0cmluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY3VzdG9tVG9vbHRpcHMoeyBvcGFjaXR5OiAwIH0pO1xuICAgICAgdGhpcy5fY2hhcnQuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLl9jaGFydC51cGRhdGUoeyBkdXJhdGlvbjogMCB9KTtcbiAgICAgIGlmICh0aGlzLmlzVGltZWxpbmUpIHtcbiAgICAgICAgdGhpcy5fY2hhcnQub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzLmRpc3BsYXkgPSBkYXRhLmxlbmd0aCA+IDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5sZWdlbmQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fZHJhd0xlZ2VuZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRhdGEuZGF0YXNldHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VzdG9tVG9vbHRpcHMoeyBvcGFjaXR5OiAwIH0pO1xuICAgICAgY29uc3QgcGx1Z2lucyA9IFt7IGFmdGVyUmVuZGVyOiAoKSA9PiB0aGlzLl9zZXRSZW5kZXJlZCh0cnVlKSB9XTtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNpdmVBbmltYXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBjdXN0b206IHRoaXMuX2N1c3RvbVRvb2x0aXBzLmJpbmQodGhpcyksXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3BhbkdhcHM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgZm9udDogXCIxMnB4ICdSb2JvdG8nLCAnc2Fucy1zZXJpZidcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnc2Fucy1zZXJpZidcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZShvcHRpb25zLCB0aGlzLmRhdGEub3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5jYWxsYmFjayA9IHRoaXMuX2Zvcm1hdFRpY2tWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gXCJ0aW1lbGluZVwiKSB7XG4gICAgICAgIHRoaXMuc2V0KFwiaXNUaW1lbGluZVwiLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX2NvbG9yRnVuYyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0Q29sb3JHZW5lcmF0b3IoXG4gICAgICAgICAgICB0aGlzLmRhdGEuY29sb3JzLnN0YXRpY0NvbG9ycyxcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jb2xvcnMuc3RhdGljQ29sb3JJbmRleFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50cy5jb2xvckZ1bmN0aW9uID0gdGhpcy5fY29sb3JGdW5jO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmRhdGFzZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MuZGlzcGxheSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcyA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzID0geyBkaXNwbGF5OiBmYWxzZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiQuY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQuY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCIxNjBweFwiO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hhcnREYXRhID0ge1xuICAgICAgICB0eXBlOiB0aGlzLmRhdGEudHlwZSxcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLmRhdGEsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICB9O1xuICAgICAgLy8gQXN5bmMgcmVzaXplIGFmdGVyIGRvbSB1cGRhdGVcbiAgICAgIHRoaXMuX2NoYXJ0ID0gbmV3IHRoaXMuQ2hhcnRDbGFzcyhjdHgsIGNoYXJ0RGF0YSk7XG4gICAgICBpZiAodGhpcy5pc1RpbWVsaW5lICE9PSB0cnVlICYmIHRoaXMuZGF0YS5sZWdlbmQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fZHJhd0xlZ2VuZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUNoYXJ0KCkge1xuICAgIGlmICghdGhpcy5fY2hhcnQpIHJldHVybjtcbiAgICAvLyBDaGFydCBub3QgcmVhZHlcbiAgICBpZiAodGhpcy5fcmVzaXplVGltZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcmVzaXplVGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnJlc2l6ZUNoYXJ0LmJpbmQodGhpcyksIDEwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX3Jlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLl9yZXNpemVUaW1lciA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuX3Jlc2l6ZUNoYXJ0KCk7XG4gIH1cblxuICBfcmVzaXplQ2hhcnQoKSB7XG4gICAgY29uc3QgY2hhcnRUYXJnZXQgPSB0aGlzLiQuY2hhcnRUYXJnZXQ7XG5cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICBpZiAoZGF0YS5kYXRhc2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNUaW1lbGluZSkge1xuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVjYWxjdWxhdGUgY2hhcnQgaGVpZ2h0IGZvciBUaW1lbGluZSBjaGFydFxuICAgIGNvbnN0IGFyZWFUb3AgPSB0aGlzLl9jaGFydC5jaGFydEFyZWEudG9wO1xuICAgIGNvbnN0IGFyZWFCb3QgPSB0aGlzLl9jaGFydC5jaGFydEFyZWEuYm90dG9tO1xuICAgIGNvbnN0IGhlaWdodDEgPSB0aGlzLl9jaGFydC5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChhcmVhQm90ID4gMCkge1xuICAgICAgdGhpcy5fYXhpc0hlaWdodCA9IGhlaWdodDEgLSBhcmVhQm90ICsgYXJlYVRvcDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2F4aXNIZWlnaHQpIHtcbiAgICAgIGNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9heGlzSGVpZ2h0KSB7XG4gICAgICBjb25zdCBjbnQgPSBkYXRhLmRhdGFzZXRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IDMwICogY250ICsgdGhpcy5fYXhpc0hlaWdodCArIFwicHhcIjtcbiAgICAgIGlmIChjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgIT09IHRhcmdldEhlaWdodCkge1xuICAgICAgICBjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSB0YXJnZXRIZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9jaGFydC5yZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgSFNMIGRpc3RyaWJ1dGVkIGNvbG9yIGxpc3RcbiAgc3RhdGljIGdldENvbG9yTGlzdChjb3VudCkge1xuICAgIGxldCBwcm9jZXNzTCA9IGZhbHNlO1xuICAgIGlmIChjb3VudCA+IDEwKSB7XG4gICAgICBwcm9jZXNzTCA9IHRydWU7XG4gICAgICBjb3VudCA9IE1hdGguY2VpbChjb3VudCAvIDIpO1xuICAgIH1cbiAgICBjb25zdCBoMSA9IDM2MCAvIGNvdW50O1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGxvb3BJID0gMDsgbG9vcEkgPCBjb3VudDsgbG9vcEkrKykge1xuICAgICAgcmVzdWx0W2xvb3BJXSA9IENvbG9yKCkuaHNsKGgxICogbG9vcEksIDgwLCAzOCk7XG4gICAgICBpZiAocHJvY2Vzc0wpIHtcbiAgICAgICAgcmVzdWx0W2xvb3BJICsgY291bnRdID0gQ29sb3IoKS5oc2woaDEgKiBsb29wSSwgODAsIDYyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRDb2xvckdlbmVyYXRvcihzdGF0aWNDb2xvcnMsIHN0YXJ0SW5kZXgpIHtcbiAgICAvLyBLbm93biBjb2xvcnMgZm9yIHN0YXRpYyBkYXRhLFxuICAgIC8vIHNob3VsZCBhZGQgZm9yIHZlcnkgY29tbW9uIHN0YXRlIHN0cmluZyBtYW51YWxseS5cbiAgICAvLyBQYWxldHRlIG1vZGlmaWVkIGZyb20gaHR0cDovL2dvb2dsZS5naXRodWIuaW8vcGFsZXR0ZS5qcy8gbXBuNjUsIEFwYWNoZSAyLjBcbiAgICBjb25zdCBwYWxldHRlID0gW1xuICAgICAgXCJmZjAwMjlcIixcbiAgICAgIFwiNjZhNjFlXCIsXG4gICAgICBcIjM3N2ViOFwiLFxuICAgICAgXCI5ODRlYTNcIixcbiAgICAgIFwiMDBkMmQ1XCIsXG4gICAgICBcImZmN2YwMFwiLFxuICAgICAgXCJhZjhkMDBcIixcbiAgICAgIFwiN2Y4MGNkXCIsXG4gICAgICBcImIzZTkwMFwiLFxuICAgICAgXCJjNDJlNjBcIixcbiAgICAgIFwiYTY1NjI4XCIsXG4gICAgICBcImY3ODFiZlwiLFxuICAgICAgXCI4ZGQzYzdcIixcbiAgICAgIFwiYmViYWRhXCIsXG4gICAgICBcImZiODA3MlwiLFxuICAgICAgXCI4MGIxZDNcIixcbiAgICAgIFwiZmRiNDYyXCIsXG4gICAgICBcImZjY2RlNVwiLFxuICAgICAgXCJiYzgwYmRcIixcbiAgICAgIFwiZmZlZDZmXCIsXG4gICAgICBcImM0ZWFmZlwiLFxuICAgICAgXCJjZjhjMDBcIixcbiAgICAgIFwiMWI5ZTc3XCIsXG4gICAgICBcImQ5NWYwMlwiLFxuICAgICAgXCJlNzI5OGFcIixcbiAgICAgIFwiZTZhYjAyXCIsXG4gICAgICBcImE2NzYxZFwiLFxuICAgICAgXCIwMDk3ZmZcIixcbiAgICAgIFwiMDBkMDY3XCIsXG4gICAgICBcImY0MzYwMFwiLFxuICAgICAgXCI0YmE5M2JcIixcbiAgICAgIFwiNTc3OWJiXCIsXG4gICAgICBcIjkyN2FjY1wiLFxuICAgICAgXCI5N2VlM2ZcIixcbiAgICAgIFwiYmYzOTQ3XCIsXG4gICAgICBcIjlmNWIwMFwiLFxuICAgICAgXCJmNDg3NThcIixcbiAgICAgIFwiOGNhZWQ2XCIsXG4gICAgICBcImYyYjk0ZlwiLFxuICAgICAgXCJlZmYyNmVcIixcbiAgICAgIFwiZTQzODcyXCIsXG4gICAgICBcImQ5YjEwMFwiLFxuICAgICAgXCI5ZDdhMDBcIixcbiAgICAgIFwiNjk4Y2ZmXCIsXG4gICAgICBcImQ5ZDlkOVwiLFxuICAgICAgXCIwMGQyN2VcIixcbiAgICAgIFwiZDA2ODAwXCIsXG4gICAgICBcIjAwOWY4MlwiLFxuICAgICAgXCJjNDkyMDBcIixcbiAgICAgIFwiY2JlOGZmXCIsXG4gICAgICBcImZlY2RkZlwiLFxuICAgICAgXCJjMjdlYjZcIixcbiAgICAgIFwiOGNkMmNlXCIsXG4gICAgICBcImM0YjhkOVwiLFxuICAgICAgXCJmODgzYjBcIixcbiAgICAgIFwiYTQ5MTAwXCIsXG4gICAgICBcImY0ODgwMFwiLFxuICAgICAgXCIyN2QwZGZcIixcbiAgICAgIFwiYTA0YTliXCIsXG4gICAgXTtcbiAgICBmdW5jdGlvbiBnZXRDb2xvckluZGV4KGlkeCkge1xuICAgICAgLy8gUmV1c2UgdGhlIGNvbG9yIGlmIGluZGV4IHRvbyBsYXJnZS5cbiAgICAgIHJldHVybiBDb2xvcihcIiNcIiArIHBhbGV0dGVbaWR4ICUgcGFsZXR0ZS5sZW5ndGhdKTtcbiAgICB9XG4gICAgY29uc3QgY29sb3JEaWN0ID0ge307XG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xuICAgIGlmIChzdGFydEluZGV4ID4gMCkgY29sb3JJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgaWYgKHN0YXRpY0NvbG9ycykge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGljQ29sb3JzKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IGMxID0gc3RhdGljQ29sb3JzW2NdO1xuICAgICAgICBpZiAoaXNGaW5pdGUoYzEpKSB7XG4gICAgICAgICAgY29sb3JEaWN0W2MudG9Mb3dlckNhc2UoKV0gPSBnZXRDb2xvckluZGV4KGMxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvckRpY3RbYy50b0xvd2VyQ2FzZSgpXSA9IENvbG9yKHN0YXRpY0NvbG9yc1tjXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBDdXN0b20gY29sb3IgYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoX18sIGRhdGEpIHtcbiAgICAgIGxldCByZXQ7XG4gICAgICBjb25zdCBuYW1lID0gZGF0YVszXTtcbiAgICAgIGlmIChuYW1lID09PSBudWxsKSByZXR1cm4gQ29sb3IoKS5oc2woMCwgNDAsIDM4KTtcbiAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybiBDb2xvcigpLmhzbCgxMjAsIDQwLCAzOCk7XG4gICAgICBjb25zdCBuYW1lMSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQgPSBjb2xvckRpY3RbbmFtZTFdO1xuICAgICAgfVxuICAgICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldCA9IGdldENvbG9ySW5kZXgoY29sb3JJbmRleCk7XG4gICAgICAgIGNvbG9ySW5kZXgrKztcbiAgICAgICAgY29sb3JEaWN0W25hbWUxXSA9IHJldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHJldHVybiBnZXRDb2xvcjtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2hhcnQtYmFzZVwiLCBIYUNoYXJ0QmFzZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuLyogZXNsaW50LXBsdWdpbi1kaXNhYmxlIGxpdCAqL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGZvcm1hdERhdGVUaW1lV2l0aFNlY29uZHMgfSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4vZW50aXR5L2hhLWNoYXJ0LWJhc2VcIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRMaW5lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2hhcnQtYmFzZVxuICAgICAgICBpZD1cImNoYXJ0XCJcbiAgICAgICAgZGF0YT1cIltbY2hhcnREYXRhXV1cIlxuICAgICAgICBpZGVudGlmaWVyPVwiW1tpZGVudGlmaWVyXV1cIlxuICAgICAgICByZW5kZXJlZD1cInt7cmVuZGVyZWR9fVwiXG4gICAgICA+PC9oYS1jaGFydC1iYXNlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogT2JqZWN0LFxuICAgICAgZGF0YTogT2JqZWN0LFxuICAgICAgbmFtZXM6IE9iamVjdCxcbiAgICAgIHVuaXQ6IFN0cmluZyxcbiAgICAgIGlkZW50aWZpZXI6IFN0cmluZyxcblxuICAgICAgaXNTaW5nbGVEZXZpY2U6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZW5kVGltZTogT2JqZWN0LFxuICAgICAgcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlcjogXCJfb25SZW5kZXJlZENoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJkYXRhQ2hhbmdlZChkYXRhLCBlbmRUaW1lLCBpc1NpbmdsZURldmljZSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBkYXRhQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgX29uUmVuZGVyZWRDaGFuZ2VkKHJlbmRlcmVkKSB7XG4gICAgaWYgKHJlbmRlcmVkKSB0aGlzLmFuaW1hdGVIZWlnaHQoKTtcbiAgfVxuXG4gIGFuaW1hdGVIZWlnaHQoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHRoaXMuJC5jaGFydC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMudW5pdDtcbiAgICBjb25zdCBkZXZpY2VTdGF0ZXMgPSB0aGlzLmRhdGE7XG4gICAgY29uc3QgZGF0YXNldHMgPSBbXTtcbiAgICBsZXQgZW5kVGltZTtcblxuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkZXZpY2VTdGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2FmZVBhcnNlRmxvYXQodmFsdWUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgcmV0dXJuIGlzRmluaXRlKHBhcnNlZCkgPyBwYXJzZWQgOiBudWxsO1xuICAgIH1cblxuICAgIGVuZFRpbWUgPVxuICAgICAgdGhpcy5lbmRUaW1lIHx8XG4gICAgICAvLyBHZXQgdGhlIGhpZ2hlc3QgZGF0ZSBmcm9tIHRoZSBsYXN0IGRhdGUgb2YgZWFjaCBkZXZpY2VcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBNYXRoLm1heC5hcHBseShcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGRldmljZVN0YXRlcy5tYXAoXG4gICAgICAgICAgICAoZGV2U3RzKSA9PlxuICAgICAgICAgICAgICBuZXcgRGF0ZShkZXZTdHMuc3RhdGVzW2RldlN0cy5zdGF0ZXMubGVuZ3RoIC0gMV0ubGFzdF9jaGFuZ2VkKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBpZiAoZW5kVGltZSA+IG5ldyBEYXRlKCkpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcyB8fCB7fTtcbiAgICBkZXZpY2VTdGF0ZXMuZm9yRWFjaCgoc3RhdGVzKSA9PiB7XG4gICAgICBjb25zdCBkb21haW4gPSBzdGF0ZXMuZG9tYWluO1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVzW3N0YXRlcy5lbnRpdHlfaWRdIHx8IHN0YXRlcy5uYW1lO1xuICAgICAgLy8gYXJyYXkgY29udGFpbmluZyBbdmFsdWUxLCB2YWx1ZTIsIGV0Y11cbiAgICAgIGxldCBwcmV2VmFsdWVzO1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgICBmdW5jdGlvbiBwdXNoRGF0YSh0aW1lc3RhbXAsIGRhdGF2YWx1ZXMpIHtcbiAgICAgICAgaWYgKCFkYXRhdmFsdWVzKSByZXR1cm47XG4gICAgICAgIGlmICh0aW1lc3RhbXAgPiBlbmRUaW1lKSB7XG4gICAgICAgICAgLy8gRHJvcCBkYXRhcG9pbnRzIHRoYXQgYXJlIGFmdGVyIHRoZSByZXF1ZXN0ZWQgZW5kVGltZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWZcbiAgICAgICAgICAvLyBlbmRUaW1lIGlzIFwibm93XCIgYW5kIGNsaWVudCB0aW1lIGlzIG5vdCBpbiBzeW5jIHdpdGggc2VydmVyIHRpbWUuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCwgaSkgPT4ge1xuICAgICAgICAgIGQuZGF0YS5wdXNoKHsgeDogdGltZXN0YW1wLCB5OiBkYXRhdmFsdWVzW2ldIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJldlZhbHVlcyA9IGRhdGF2YWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZENvbHVtbihuYW1lWSwgc3RlcCwgZmlsbCkge1xuICAgICAgICBsZXQgZGF0YUZpbGwgPSBmYWxzZTtcbiAgICAgICAgbGV0IGRhdGFTdGVwID0gZmFsc2U7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgZGF0YUZpbGwgPSBcIm9yaWdpblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgZGF0YVN0ZXAgPSBcImJlZm9yZVwiO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IG5hbWVZLFxuICAgICAgICAgIGZpbGw6IGRhdGFGaWxsLFxuICAgICAgICAgIHN0ZXBwZWRMaW5lOiBkYXRhU3RlcCxcbiAgICAgICAgICBwb2ludFJhZGl1czogMCxcbiAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICB1bml0VGV4dDogdW5pdCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZG9tYWluID09PSBcInRoZXJtb3N0YXRcIiB8fFxuICAgICAgICBkb21haW4gPT09IFwiY2xpbWF0ZVwiIHx8XG4gICAgICAgIGRvbWFpbiA9PT0gXCJ3YXRlcl9oZWF0ZXJcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGhhc0h2YWNBY3Rpb24gPSBzdGF0ZXMuc3RhdGVzLnNvbWUoXG4gICAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5hdHRyaWJ1dGVzICYmIHN0YXRlLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb25cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpc0hlYXRpbmcgPVxuICAgICAgICAgIGRvbWFpbiA9PT0gXCJjbGltYXRlXCIgJiYgaGFzSHZhY0FjdGlvblxuICAgICAgICAgICAgPyAoc3RhdGUpID0+IHN0YXRlLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb24gPT09IFwiaGVhdGluZ1wiXG4gICAgICAgICAgICA6IChzdGF0ZSkgPT4gc3RhdGUuc3RhdGUgPT09IFwiaGVhdFwiO1xuICAgICAgICBjb25zdCBpc0Nvb2xpbmcgPVxuICAgICAgICAgIGRvbWFpbiA9PT0gXCJjbGltYXRlXCIgJiYgaGFzSHZhY0FjdGlvblxuICAgICAgICAgICAgPyAoc3RhdGUpID0+IHN0YXRlLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb24gPT09IFwiY29vbGluZ1wiXG4gICAgICAgICAgICA6IChzdGF0ZSkgPT4gc3RhdGUuc3RhdGUgPT09IFwiY29vbFwiO1xuXG4gICAgICAgIGNvbnN0IGhhc0hlYXQgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoaXNIZWF0aW5nKTtcbiAgICAgICAgY29uc3QgaGFzQ29vbCA9IHN0YXRlcy5zdGF0ZXMuc29tZShpc0Nvb2xpbmcpO1xuICAgICAgICAvLyBXZSBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlcm1vc3RhdHMgdGhhdCBoYXZlIGEgdGFyZ2V0IHRlbXBlcmF0dXJlXG4gICAgICAgIC8vIHJhbmdlIHZlcnN1cyBvbmVzIHRoYXQgaGF2ZSBqdXN0IGEgdGFyZ2V0IHRlbXBlcmF0dXJlXG5cbiAgICAgICAgLy8gVXNpbmcgc3RlcCBjaGFydCBieSBzdGVwLWJlZm9yZSBzbyBtYW51YWxseSBpbnRlcnBvbGF0aW9uIG5vdCBuZWVkZWQuXG4gICAgICAgIGNvbnN0IGhhc1RhcmdldFJhbmdlID0gc3RhdGVzLnN0YXRlcy5zb21lKFxuICAgICAgICAgIChzdGF0ZSkgPT5cbiAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCAhPT1cbiAgICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3dcbiAgICAgICAgKTtcblxuICAgICAgICBhZGRDb2x1bW4oXG4gICAgICAgICAgYCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5jYXJkLmNsaW1hdGUuY3VycmVudF90ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgKX1gLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGhhc0hlYXQpIHtcbiAgICAgICAgICBhZGRDb2x1bW4oXG4gICAgICAgICAgICBgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuaGVhdGluZ1wiLCBcIm5hbWVcIiwgbmFtZSl9YCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBUaGUgXCJoZWF0aW5nXCIgc2VyaWVzIHVzZXMgc3RlcHBlZEFyZWEgdG8gc2hhZGUgdGhlIGFyZWEgYmVsb3cgdGhlIGN1cnJlbnRcbiAgICAgICAgICAvLyB0ZW1wZXJhdHVyZSB3aGVuIHRoZSB0aGVybW9zdGF0IGlzIGNhbGxpbmcgZm9yIGhlYXQuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0Nvb2wpIHtcbiAgICAgICAgICBhZGRDb2x1bW4oXG4gICAgICAgICAgICBgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuY29vbGluZ1wiLCBcIm5hbWVcIiwgbmFtZSl9YCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBUaGUgXCJjb29saW5nXCIgc2VyaWVzIHVzZXMgc3RlcHBlZEFyZWEgdG8gc2hhZGUgdGhlIGFyZWEgYmVsb3cgdGhlIGN1cnJlbnRcbiAgICAgICAgICAvLyB0ZW1wZXJhdHVyZSB3aGVuIHRoZSB0aGVybW9zdGF0IGlzIGNhbGxpbmcgZm9yIGhlYXQuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzVGFyZ2V0UmFuZ2UpIHtcbiAgICAgICAgICBhZGRDb2x1bW4oXG4gICAgICAgICAgICBgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuY2FyZC5jbGltYXRlLnRhcmdldF90ZW1wZXJhdHVyZV9tb2RlXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBcIm1vZGVcIixcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLmhpZ2hcIilcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICAgIGFkZENvbHVtbihcbiAgICAgICAgICAgIGAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5jYXJkLmNsaW1hdGUudGFyZ2V0X3RlbXBlcmF0dXJlX21vZGVcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIFwibW9kZVwiLFxuICAgICAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUubG93XCIpXG4gICAgICAgICAgICApfWAsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDb2x1bW4oXG4gICAgICAgICAgICBgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuY2FyZC5jbGltYXRlLnRhcmdldF90ZW1wZXJhdHVyZV9lbnRpdHlcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVzLnN0YXRlcy5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIGlmICghc3RhdGUuYXR0cmlidXRlcykgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IGN1clRlbXAgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmUpO1xuICAgICAgICAgIGNvbnN0IHNlcmllcyA9IFtjdXJUZW1wXTtcbiAgICAgICAgICBpZiAoaGFzSGVhdCkge1xuICAgICAgICAgICAgc2VyaWVzLnB1c2goaXNIZWF0aW5nKHN0YXRlKSA/IGN1clRlbXAgOiBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc0Nvb2wpIHtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKGlzQ29vbGluZyhzdGF0ZSkgPyBjdXJUZW1wIDogbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNUYXJnZXRSYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SGlnaCA9IHNhZmVQYXJzZUZsb2F0KFxuICAgICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2hcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRMb3cgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyk7XG4gICAgICAgICAgICBzZXJpZXMucHVzaCh0YXJnZXRIaWdoLCB0YXJnZXRMb3cpO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSwgc2VyaWVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy50ZW1wZXJhdHVyZSk7XG4gICAgICAgICAgICBzZXJpZXMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSwgc2VyaWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT25seSBkaXNhYmxlIGludGVycG9sYXRpb24gZm9yIHNlbnNvcnNcbiAgICAgICAgY29uc3QgaXNTdGVwID0gZG9tYWluID09PSBcInNlbnNvclwiO1xuICAgICAgICBhZGRDb2x1bW4obmFtZSwgaXNTdGVwKTtcblxuICAgICAgICBsZXQgbGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3REYXRlID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3ROdWxsRGF0ZSA9IG51bGw7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBjaGFydCBkYXRhLlxuICAgICAgICAvLyBXaGVuIHN0YXRlIGlzIGB1bmtub3duYCwgY2FsY3VsYXRlIHRoZSB2YWx1ZSBhbmQgYnJlYWsgdGhlIGxpbmUuXG4gICAgICAgIHN0YXRlcy5zdGF0ZXMuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLnN0YXRlKTtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgbGFzdE51bGxEYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgbGFzdE51bGxEYXRlVGltZSA9IGxhc3ROdWxsRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0RGF0ZVRpbWUgPSBsYXN0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0bXBWYWx1ZSA9XG4gICAgICAgICAgICAgICh2YWx1ZSAtIGxhc3RWYWx1ZSkgKlxuICAgICAgICAgICAgICAgICgobGFzdE51bGxEYXRlVGltZSAtIGxhc3REYXRlVGltZSkgL1xuICAgICAgICAgICAgICAgICAgKGRhdGVUaW1lIC0gbGFzdERhdGVUaW1lKSkgK1xuICAgICAgICAgICAgICBsYXN0VmFsdWU7XG4gICAgICAgICAgICBwdXNoRGF0YShsYXN0TnVsbERhdGUsIFt0bXBWYWx1ZV0pO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUobGFzdE51bGxEYXRlVGltZSArIDEpLCBbbnVsbF0pO1xuICAgICAgICAgICAgcHVzaERhdGEoZGF0ZSwgW3ZhbHVlXSk7XG4gICAgICAgICAgICBsYXN0RGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGxhc3ROdWxsRGF0ZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBsYXN0TnVsbERhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHB1c2hEYXRhKGRhdGUsIFt2YWx1ZV0pO1xuICAgICAgICAgICAgbGFzdERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgbGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHZhbHVlID09PSBudWxsICYmXG4gICAgICAgICAgICBsYXN0TnVsbERhdGUgPT09IG51bGwgJiZcbiAgICAgICAgICAgIGxhc3RWYWx1ZSAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGFzdE51bGxEYXRlID0gZGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgYW4gZW50cnkgZm9yIGZpbmFsIHZhbHVlc1xuICAgICAgcHVzaERhdGEoZW5kVGltZSwgcHJldlZhbHVlcywgZmFsc2UpO1xuXG4gICAgICAvLyBDb25jYXQgdHdvIGFycmF5c1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZGF0YXNldHMsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0VG9vbHRpcFRpdGxlID0gKGl0ZW1zLCBkYXRhKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbMF07XG4gICAgICBjb25zdCBkYXRlID0gZGF0YS5kYXRhc2V0c1tpdGVtLmRhdGFzZXRJbmRleF0uZGF0YVtpdGVtLmluZGV4XS54O1xuXG4gICAgICByZXR1cm4gZm9ybWF0RGF0ZVRpbWVXaXRoU2Vjb25kcyhkYXRlLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgIHVuaXQ6IHVuaXQsXG4gICAgICBsZWdlbmQ6ICF0aGlzLmlzU2luZ2xlRGV2aWNlLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBtYWpvcjoge1xuICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBtb2RlOiBcIm5lYXJlYWNoXCIsXG4gICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICB0aXRsZTogZm9ybWF0VG9vbHRpcFRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgbW9kZTogXCJuZWFyZWFjaFwiLFxuICAgICAgICB9LFxuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0b3A6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjEsXG4gICAgICAgICAgICBwb2ludFJhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgaGl0UmFkaXVzOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICBmaWxsZXI6IHtcbiAgICAgICAgICAgIHByb3BhZ2F0ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXSxcbiAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuY2hhcnREYXRhID0gY2hhcnRPcHRpb25zO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmVcIiwgU3RhdGVIaXN0b3J5Q2hhcnRMaW5lKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG4vKiBlc2xpbnQtcGx1Z2luLWRpc2FibGUgbGl0ICovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZVRpbWVXaXRoU2Vjb25kcyB9IGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IFwiLi9lbnRpdHkvaGEtY2hhcnQtYmFzZVwiO1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnlDaGFydFRpbWVsaW5lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3JlbmRlcmVkXSkge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jaGFydC1iYXNlIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jaGFydC1iYXNlXG4gICAgICAgIGRhdGE9XCJbW2NoYXJ0RGF0YV1dXCJcbiAgICAgICAgcmVuZGVyZWQ9XCJ7e3JlbmRlcmVkfX1cIlxuICAgICAgICBydGw9XCJ7e3J0bH19XCJcbiAgICAgID48L2hhLWNoYXJ0LWJhc2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgY2hhcnREYXRhOiBPYmplY3QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBuYW1lczogT2JqZWN0LFxuICAgICAgbm9TaW5nbGU6IEJvb2xlYW4sXG4gICAgICBlbmRUaW1lOiBEYXRlLFxuICAgICAgcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJkYXRhQ2hhbmdlZChkYXRhLCBlbmRUaW1lLCBsb2NhbGl6ZSwgbGFuZ3VhZ2UpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZGF0YUNoYW5nZWQoKSB7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICBjb25zdCBzdGF0aWNDb2xvcnMgPSB7XG4gICAgICBvbjogMSxcbiAgICAgIG9mZjogMCxcbiAgICAgIHVuYXZhaWxhYmxlOiBcIiNhMGEwYTBcIixcbiAgICAgIHVua25vd246IFwiIzYwNjA2MFwiLFxuICAgICAgaWRsZTogMixcbiAgICB9O1xuICAgIGxldCBzdGF0ZUhpc3RvcnkgPSB0aGlzLmRhdGE7XG5cbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlSGlzdG9yeSkge1xuICAgICAgc3RhdGVIaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoXG4gICAgICBzdGF0ZUhpc3RvcnkucmVkdWNlKFxuICAgICAgICAobWluVGltZSwgc3RhdGVJbmZvKSA9PlxuICAgICAgICAgIE1hdGgubWluKG1pblRpbWUsIG5ldyBEYXRlKHN0YXRlSW5mby5kYXRhWzBdLmxhc3RfY2hhbmdlZCkpLFxuICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIGVuZCB0aW1lIGlzIE1hdGgubWF4KHN0YXJ0VGltZSwgbGFzdF9ldmVudClcbiAgICBsZXQgZW5kVGltZSA9XG4gICAgICB0aGlzLmVuZFRpbWUgfHxcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBzdGF0ZUhpc3RvcnkucmVkdWNlKFxuICAgICAgICAgIChtYXhUaW1lLCBzdGF0ZUluZm8pID0+XG4gICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgbWF4VGltZSxcbiAgICAgICAgICAgICAgbmV3IERhdGUoc3RhdGVJbmZvLmRhdGFbc3RhdGVJbmZvLmRhdGEubGVuZ3RoIC0gMV0ubGFzdF9jaGFuZ2VkKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBzdGFydFRpbWVcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgIGlmIChlbmRUaW1lID4gbmV3IERhdGUoKSkge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgY29uc3QgZGF0YXNldHMgPSBbXTtcbiAgICAvLyBzdGF0ZUhpc3RvcnkgaXMgYSBsaXN0IG9mIGxpc3RzIG9mIHNvcnRlZCBzdGF0ZSBvYmplY3RzXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzIHx8IHt9O1xuICAgIHN0YXRlSGlzdG9yeS5mb3JFYWNoKChzdGF0ZUluZm8pID0+IHtcbiAgICAgIGxldCBuZXdMYXN0Q2hhbmdlZDtcbiAgICAgIGxldCBwcmV2U3RhdGUgPSBudWxsO1xuICAgICAgbGV0IGxvY1N0YXRlID0gbnVsbDtcbiAgICAgIGxldCBwcmV2TGFzdENoYW5nZWQgPSBzdGFydFRpbWU7XG4gICAgICBjb25zdCBlbnRpdHlEaXNwbGF5ID0gbmFtZXNbc3RhdGVJbmZvLmVudGl0eV9pZF0gfHwgc3RhdGVJbmZvLm5hbWU7XG5cbiAgICAgIGNvbnN0IGRhdGFSb3cgPSBbXTtcbiAgICAgIHN0YXRlSW5mby5kYXRhLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgICBjb25zdCB0aW1lU3RhbXAgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuICAgICAgICBpZiAobmV3U3RhdGUgPT09IHVuZGVmaW5lZCB8fCBuZXdTdGF0ZSA9PT0gXCJcIikge1xuICAgICAgICAgIG5ld1N0YXRlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZVN0YW1wID4gZW5kVGltZSkge1xuICAgICAgICAgIC8vIERyb3AgZGF0YXBvaW50cyB0aGF0IGFyZSBhZnRlciB0aGUgcmVxdWVzdGVkIGVuZFRpbWUuIFRoaXMgY291bGQgaGFwcGVuIGlmXG4gICAgICAgICAgLy8gZW5kVGltZSBpcyAnbm93JyBhbmQgY2xpZW50IHRpbWUgaXMgbm90IGluIHN5bmMgd2l0aCBzZXJ2ZXIgdGltZS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCAmJiBuZXdTdGF0ZSAhPT0gcHJldlN0YXRlKSB7XG4gICAgICAgICAgbmV3TGFzdENoYW5nZWQgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuXG4gICAgICAgICAgZGF0YVJvdy5wdXNoKFtwcmV2TGFzdENoYW5nZWQsIG5ld0xhc3RDaGFuZ2VkLCBsb2NTdGF0ZSwgcHJldlN0YXRlXSk7XG5cbiAgICAgICAgICBwcmV2U3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICBsb2NTdGF0ZSA9IHN0YXRlLnN0YXRlX2xvY2FsaXplO1xuICAgICAgICAgIHByZXZMYXN0Q2hhbmdlZCA9IG5ld0xhc3RDaGFuZ2VkO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZTdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHByZXZTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgIGxvY1N0YXRlID0gc3RhdGUuc3RhdGVfbG9jYWxpemU7XG4gICAgICAgICAgcHJldkxhc3RDaGFuZ2VkID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2U3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YVJvdy5wdXNoKFtwcmV2TGFzdENoYW5nZWQsIGVuZFRpbWUsIGxvY1N0YXRlLCBwcmV2U3RhdGVdKTtcbiAgICAgIH1cbiAgICAgIGRhdGFzZXRzLnB1c2goeyBkYXRhOiBkYXRhUm93IH0pO1xuICAgICAgbGFiZWxzLnB1c2goZW50aXR5RGlzcGxheSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3JtYXRUb29sdGlwTGFiZWwgPSAoaXRlbSwgZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVzID0gZGF0YS5kYXRhc2V0c1tpdGVtLmRhdGFzZXRJbmRleF0uZGF0YVtpdGVtLmluZGV4XTtcblxuICAgICAgY29uc3Qgc3RhcnQgPSBmb3JtYXREYXRlVGltZVdpdGhTZWNvbmRzKHZhbHVlc1swXSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICAgIGNvbnN0IGVuZCA9IGZvcm1hdERhdGVUaW1lV2l0aFNlY29uZHModmFsdWVzWzFdLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICAgICAgY29uc3Qgc3RhdGUgPSB2YWx1ZXNbMl07XG5cbiAgICAgIHJldHVybiBbc3RhdGUsIHN0YXJ0LCBlbmRdO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiBcInRpbWVsaW5lXCIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBsYWJlbDogZm9ybWF0VG9vbHRpcExhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWFqb3I6IHtcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhZnRlclNldERpbWVuc2lvbnM6ICh5YXhlKSA9PiB7XG4gICAgICAgICAgICAgICAgeWF4ZS5tYXhXaWR0aCA9IHlheGUuY2hhcnQud2lkdGggKiAwLjE4O1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5fY29tcHV0ZVJUTCA/IFwicmlnaHRcIiA6IFwibGVmdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgc3RhdGljQ29sb3JzOiBzdGF0aWNDb2xvcnMsXG4gICAgICAgIHN0YXRpY0NvbG9ySW5kZXg6IDMsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5jaGFydERhdGEgPSBjaGFydE9wdGlvbnM7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJzdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXCIsXG4gIFN0YXRlSGlzdG9yeUNoYXJ0VGltZWxpbmVcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXCI7XG5cbmNsYXNzIFN0YXRlSGlzdG9yeUNoYXJ0cyBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC8qIGhlaWdodCBvZiBzaW5nbGUgdGltZWxpbmUgY2hhcnQgPSA1OHB4ICovXG4gICAgICAgICAgbWluLWhlaWdodDogNThweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBjbGFzcz1cImluZm9cIlxuICAgICAgICBpZj1cIltbX2NvbXB1dGVJc0xvYWRpbmcoaXNMb2FkaW5nRGF0YSldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY29tcG9uZW50cy5oaXN0b3J5X2NoYXJ0cy5sb2FkaW5nX2hpc3RvcnknKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgY2xhc3M9XCJpbmZvXCJcbiAgICAgICAgaWY9XCJbW19jb21wdXRlSXNFbXB0eShpc0xvYWRpbmdEYXRhLCBoaXN0b3J5RGF0YSldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY29tcG9uZW50cy5oaXN0b3J5X2NoYXJ0cy5ub19oaXN0b3J5X2ZvdW5kJyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1toaXN0b3J5RGF0YS50aW1lbGluZS5sZW5ndGhdXVwiPlxuICAgICAgICA8c3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZGF0YT1cIltbaGlzdG9yeURhdGEudGltZWxpbmVdXVwiXG4gICAgICAgICAgZW5kLXRpbWU9XCJbW19jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93LCBoaXN0b3J5RGF0YSldXVwiXG4gICAgICAgICAgbm8tc2luZ2xlPVwiW1tub1NpbmdsZV1dXCJcbiAgICAgICAgICBuYW1lcz1cIltbbmFtZXNdXVwiXG4gICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2hpc3RvcnlEYXRhLmxpbmVdXVwiPlxuICAgICAgICA8c3RhdGUtaGlzdG9yeS1jaGFydC1saW5lXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICB1bml0PVwiW1tpdGVtLnVuaXRdXVwiXG4gICAgICAgICAgZGF0YT1cIltbaXRlbS5kYXRhXV1cIlxuICAgICAgICAgIGlkZW50aWZpZXI9XCJbW2l0ZW0uaWRlbnRpZmllcl1dXCJcbiAgICAgICAgICBpcy1zaW5nbGUtZGV2aWNlPVwiW1tfY29tcHV0ZUlzU2luZ2xlTGluZUNoYXJ0KGl0ZW0uZGF0YSwgbm9TaW5nbGUpXV1cIlxuICAgICAgICAgIGVuZC10aW1lPVwiW1tfY29tcHV0ZUVuZFRpbWUoZW5kVGltZSwgdXBUb05vdywgaGlzdG9yeURhdGEpXV1cIlxuICAgICAgICAgIG5hbWVzPVwiW1tuYW1lc11dXCJcbiAgICAgICAgPjwvc3RhdGUtaGlzdG9yeS1jaGFydC1saW5lPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBoaXN0b3J5RGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG5cbiAgICAgIGlzTG9hZGluZ0RhdGE6IEJvb2xlYW4sXG5cbiAgICAgIGVuZFRpbWU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgdXBUb05vdzogQm9vbGVhbixcbiAgICAgIG5vU2luZ2xlOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZUlzU2luZ2xlTGluZUNoYXJ0KGRhdGEsIG5vU2luZ2xlKSB7XG4gICAgcmV0dXJuICFub1NpbmdsZSAmJiBkYXRhICYmIGRhdGEubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgX2NvbXB1dGVJc0VtcHR5KGlzTG9hZGluZ0RhdGEsIGhpc3RvcnlEYXRhKSB7XG4gICAgY29uc3QgaGlzdG9yeURhdGFFbXB0eSA9XG4gICAgICAhaGlzdG9yeURhdGEgfHxcbiAgICAgICFoaXN0b3J5RGF0YS50aW1lbGluZSB8fFxuICAgICAgIWhpc3RvcnlEYXRhLmxpbmUgfHxcbiAgICAgIChoaXN0b3J5RGF0YS50aW1lbGluZS5sZW5ndGggPT09IDAgJiYgaGlzdG9yeURhdGEubGluZS5sZW5ndGggPT09IDApO1xuICAgIHJldHVybiAhaXNMb2FkaW5nRGF0YSAmJiBoaXN0b3J5RGF0YUVtcHR5O1xuICB9XG5cbiAgX2NvbXB1dGVJc0xvYWRpbmcoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIGlzTG9hZGluZyAmJiAhdGhpcy5oaXN0b3J5RGF0YTtcbiAgfVxuXG4gIF9jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93KSB7XG4gICAgLy8gV2UgZG9uJ3QgcmVhbGx5IGNhcmUgYWJvdXQgdGhlIHZhbHVlIG9mIGhpc3RvcnlEYXRhLCBidXQgaWYgaXQgY2hhbmdlIHdlIHdhbnQgdG8gdXBkYXRlXG4gICAgLy8gZW5kVGltZS5cbiAgICByZXR1cm4gdXBUb05vdyA/IG5ldyBEYXRlKCkgOiBlbmRUaW1lO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1oaXN0b3J5LWNoYXJ0c1wiLCBTdGF0ZUhpc3RvcnlDaGFydHMpO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBjb21wdXRlSGlzdG9yeSxcbiAgZmV0Y2hSZWNlbnQsXG4gIEhpc3RvcnlSZXN1bHQsXG4gIExpbmVDaGFydFVuaXQsXG4gIFRpbWVsaW5lRW50aXR5LFxufSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVDb25maWcge1xuICByZWZyZXNoOiBudW1iZXI7XG4gIGNhY2hlS2V5OiBzdHJpbmc7XG4gIGhvdXJzVG9TaG93OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDYWNoZWRSZXN1bHRzIHtcbiAgcHJvbTogUHJvbWlzZTxIaXN0b3J5UmVzdWx0PjtcbiAgc3RhcnRUaW1lOiBEYXRlO1xuICBlbmRUaW1lOiBEYXRlO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBkYXRhOiBIaXN0b3J5UmVzdWx0O1xufVxuXG4vLyBUaGlzIGlzIGEgZGlmZmVyZW50IGludGVyZmFjZSwgYSBkaWZmZXJlbnQgY2FjaGUgOihcbmludGVyZmFjZSBSZWNlbnRDYWNoZVJlc3VsdHMge1xuICBjcmVhdGVkOiBudW1iZXI7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIGRhdGE6IFByb21pc2U8SGlzdG9yeVJlc3VsdD47XG59XG5cbmNvbnN0IFJFQ0VOVF9USFJFU0hPTEQgPSA2MDAwMDsgLy8gMSBtaW51dGVcbmNvbnN0IFJFQ0VOVF9DQUNIRTogeyBbY2FjaGVLZXk6IHN0cmluZ106IFJlY2VudENhY2hlUmVzdWx0cyB9ID0ge307XG5jb25zdCBzdGF0ZUhpc3RvcnlDYWNoZTogeyBbY2FjaGVLZXk6IHN0cmluZ106IENhY2hlZFJlc3VsdHMgfSA9IHt9O1xuXG4vLyBDYWNoZWQgdHlwZSAxIHVuY3Rpb24uIFdpdGhvdXQgY2FjaGUgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGdldFJlY2VudCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgc3RhcnRUaW1lOiBEYXRlLFxuICBlbmRUaW1lOiBEYXRlLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgY2FjaGVLZXkgPSBlbnRpdHlJZDtcbiAgY29uc3QgY2FjaGUgPSBSRUNFTlRfQ0FDSEVbY2FjaGVLZXldO1xuXG4gIGlmIChcbiAgICBjYWNoZSAmJlxuICAgIERhdGUubm93KCkgLSBjYWNoZS5jcmVhdGVkIDwgUkVDRU5UX1RIUkVTSE9MRCAmJlxuICAgIGNhY2hlLmxhbmd1YWdlID09PSBsYW5ndWFnZVxuICApIHtcbiAgICByZXR1cm4gY2FjaGUuZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHByb20gPSBmZXRjaFJlY2VudChoYXNzLCBlbnRpdHlJZCwgc3RhcnRUaW1lLCBlbmRUaW1lKS50aGVuKFxuICAgIChzdGF0ZUhpc3RvcnkpID0+IGNvbXB1dGVIaXN0b3J5KGhhc3MsIHN0YXRlSGlzdG9yeSwgbG9jYWxpemUsIGxhbmd1YWdlKSxcbiAgICAoZXJyKSA9PiB7XG4gICAgICBkZWxldGUgUkVDRU5UX0NBQ0hFW2VudGl0eUlkXTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICk7XG5cbiAgUkVDRU5UX0NBQ0hFW2NhY2hlS2V5XSA9IHtcbiAgICBjcmVhdGVkOiBEYXRlLm5vdygpLFxuICAgIGxhbmd1YWdlLFxuICAgIGRhdGE6IHByb20sXG4gIH07XG4gIHJldHVybiBwcm9tO1xufTtcblxuLy8gQ2FjaGUgdHlwZSAyIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIGdldEVtcHR5Q2FjaGUoXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZVxuKTogQ2FjaGVkUmVzdWx0cyB7XG4gIHJldHVybiB7XG4gICAgcHJvbTogUHJvbWlzZS5yZXNvbHZlKHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9KSxcbiAgICBsYW5ndWFnZSxcbiAgICBzdGFydFRpbWUsXG4gICAgZW5kVGltZSxcbiAgICBkYXRhOiB7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudFdpdGhDYWNoZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgY2FjaGVDb25maWc6IENhY2hlQ29uZmlnLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgY2FjaGVLZXkgPSBjYWNoZUNvbmZpZy5jYWNoZUtleTtcbiAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGVuZFRpbWUpO1xuICBzdGFydFRpbWUuc2V0SG91cnMoc3RhcnRUaW1lLmdldEhvdXJzKCkgLSBjYWNoZUNvbmZpZy5ob3Vyc1RvU2hvdyk7XG4gIGxldCB0b0ZldGNoU3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICBsZXQgYXBwZW5kaW5nVG9DYWNoZSA9IGZhbHNlO1xuXG4gIGxldCBjYWNoZSA9IHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XTtcbiAgaWYgKFxuICAgIGNhY2hlICYmXG4gICAgdG9GZXRjaFN0YXJ0VGltZSA+PSBjYWNoZS5zdGFydFRpbWUgJiZcbiAgICB0b0ZldGNoU3RhcnRUaW1lIDw9IGNhY2hlLmVuZFRpbWUgJiZcbiAgICBjYWNoZS5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2VcbiAgKSB7XG4gICAgdG9GZXRjaFN0YXJ0VGltZSA9IGNhY2hlLmVuZFRpbWU7XG4gICAgYXBwZW5kaW5nVG9DYWNoZSA9IHRydWU7XG4gICAgLy8gVGhpcyBwcmV0dHkgbXVjaCBuZXZlciBoYXBwZW5zIGFzIGVuZFRpbWUgaXMgdXN1YWxseSBzZXQgdG8gbm93XG4gICAgaWYgKGVuZFRpbWUgPD0gY2FjaGUuZW5kVGltZSkge1xuICAgICAgcmV0dXJuIGNhY2hlLnByb207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNhY2hlID0gc3RhdGVIaXN0b3J5Q2FjaGVbY2FjaGVLZXldID0gZ2V0RW1wdHlDYWNoZShcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgc3RhcnRUaW1lLFxuICAgICAgZW5kVGltZVxuICAgICk7XG4gIH1cblxuICBjb25zdCBjdXJDYWNoZVByb20gPSBjYWNoZS5wcm9tO1xuXG4gIGNvbnN0IGdlblByb20gPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGZldGNoZWRIaXN0b3J5OiBIYXNzRW50aXR5W11bXTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBjdXJDYWNoZVByb20sXG4gICAgICAgIGZldGNoUmVjZW50KFxuICAgICAgICAgIGhhc3MsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgdG9GZXRjaFN0YXJ0VGltZSxcbiAgICAgICAgICBlbmRUaW1lLFxuICAgICAgICAgIGFwcGVuZGluZ1RvQ2FjaGVcbiAgICAgICAgKSxcbiAgICAgIF0pO1xuICAgICAgZmV0Y2hlZEhpc3RvcnkgPSByZXN1bHRzWzFdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVsZXRlIHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVIaXN0b3J5ID0gY29tcHV0ZUhpc3RvcnkoXG4gICAgICBoYXNzLFxuICAgICAgZmV0Y2hlZEhpc3RvcnksXG4gICAgICBsb2NhbGl6ZSxcbiAgICAgIGxhbmd1YWdlXG4gICAgKTtcbiAgICBpZiAoYXBwZW5kaW5nVG9DYWNoZSkge1xuICAgICAgbWVyZ2VMaW5lKHN0YXRlSGlzdG9yeS5saW5lLCBjYWNoZS5kYXRhLmxpbmUpO1xuICAgICAgbWVyZ2VUaW1lbGluZShzdGF0ZUhpc3RvcnkudGltZWxpbmUsIGNhY2hlLmRhdGEudGltZWxpbmUpO1xuICAgICAgcHJ1bmVTdGFydFRpbWUoc3RhcnRUaW1lLCBjYWNoZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGUuZGF0YSA9IHN0YXRlSGlzdG9yeTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlLmRhdGE7XG4gIH07XG5cbiAgY2FjaGUucHJvbSA9IGdlblByb20oKTtcbiAgY2FjaGUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICBjYWNoZS5lbmRUaW1lID0gZW5kVGltZTtcbiAgcmV0dXJuIGNhY2hlLnByb207XG59O1xuXG5jb25zdCBtZXJnZUxpbmUgPSAoXG4gIGhpc3RvcnlMaW5lczogTGluZUNoYXJ0VW5pdFtdLFxuICBjYWNoZUxpbmVzOiBMaW5lQ2hhcnRVbml0W11cbikgPT4ge1xuICBoaXN0b3J5TGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSBsaW5lLnVuaXQ7XG4gICAgY29uc3Qgb2xkTGluZSA9IGNhY2hlTGluZXMuZmluZCgoY2FjaGVMaW5lKSA9PiBjYWNoZUxpbmUudW5pdCA9PT0gdW5pdCk7XG4gICAgaWYgKG9sZExpbmUpIHtcbiAgICAgIGxpbmUuZGF0YS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkRW50aXR5ID0gb2xkTGluZS5kYXRhLmZpbmQoXG4gICAgICAgICAgKGNhY2hlRW50aXR5KSA9PiBlbnRpdHkuZW50aXR5X2lkID09PSBjYWNoZUVudGl0eS5lbnRpdHlfaWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG9sZEVudGl0eSkge1xuICAgICAgICAgIG9sZEVudGl0eS5zdGF0ZXMgPSBvbGRFbnRpdHkuc3RhdGVzLmNvbmNhdChlbnRpdHkuc3RhdGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbGRMaW5lLmRhdGEucHVzaChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBtZXJnZVRpbWVsaW5lID0gKFxuICBoaXN0b3J5VGltZWxpbmVzOiBUaW1lbGluZUVudGl0eVtdLFxuICBjYWNoZVRpbWVsaW5lczogVGltZWxpbmVFbnRpdHlbXVxuKSA9PiB7XG4gIGhpc3RvcnlUaW1lbGluZXMuZm9yRWFjaCgodGltZWxpbmUpID0+IHtcbiAgICBjb25zdCBvbGRUaW1lbGluZSA9IGNhY2hlVGltZWxpbmVzLmZpbmQoXG4gICAgICAoY2FjaGVUaW1lbGluZSkgPT4gY2FjaGVUaW1lbGluZS5lbnRpdHlfaWQgPT09IHRpbWVsaW5lLmVudGl0eV9pZFxuICAgICk7XG4gICAgaWYgKG9sZFRpbWVsaW5lKSB7XG4gICAgICBvbGRUaW1lbGluZS5kYXRhID0gb2xkVGltZWxpbmUuZGF0YS5jb25jYXQodGltZWxpbmUuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlVGltZWxpbmVzLnB1c2godGltZWxpbmUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBwcnVuZUFycmF5ID0gKG9yaWdpbmFsU3RhcnRUaW1lOiBEYXRlLCBhcnIpID0+IHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGNvbnN0IGNoYW5nZWRBZnRlclN0YXJ0VGltZSA9IGFyci5maW5kSW5kZXgoXG4gICAgKHN0YXRlKSA9PiBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpID4gb3JpZ2luYWxTdGFydFRpbWVcbiAgKTtcbiAgaWYgKGNoYW5nZWRBZnRlclN0YXJ0VGltZSA9PT0gMCkge1xuICAgIC8vIElmIGFsbCBjaGFuZ2VzIGhhcHBlbmVkIGFmdGVyIG9yaWdpbmFsU3RhcnRUaW1lIHRoZW4gd2UgYXJlIGRvbmUuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8vIElmIGFsbCBjaGFuZ2VzIGhhcHBlbmVkIGF0IG9yIGJlZm9yZSBvcmlnaW5hbFN0YXJ0VGltZS4gVXNlIGxhc3QgaW5kZXguXG4gIGNvbnN0IHVwZGF0ZUluZGV4ID1cbiAgICBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPT09IC0xID8gYXJyLmxlbmd0aCAtIDEgOiBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgLSAxO1xuICBhcnJbdXBkYXRlSW5kZXhdLmxhc3RfY2hhbmdlZCA9IG9yaWdpbmFsU3RhcnRUaW1lO1xuICByZXR1cm4gYXJyLnNsaWNlKHVwZGF0ZUluZGV4KTtcbn07XG5cbmNvbnN0IHBydW5lU3RhcnRUaW1lID0gKG9yaWdpbmFsU3RhcnRUaW1lOiBEYXRlLCBjYWNoZURhdGE6IEhpc3RvcnlSZXN1bHQpID0+IHtcbiAgY2FjaGVEYXRhLmxpbmUuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGxpbmUuZGF0YS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGVudGl0eS5zdGF0ZXMgPSBwcnVuZUFycmF5KG9yaWdpbmFsU3RhcnRUaW1lLCBlbnRpdHkuc3RhdGVzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY2FjaGVEYXRhLnRpbWVsaW5lLmZvckVhY2goKHRpbWVsaW5lKSA9PiB7XG4gICAgdGltZWxpbmUuZGF0YSA9IHBydW5lQXJyYXkob3JpZ2luYWxTdGFydFRpbWUsIHRpbWVsaW5lLmRhdGEpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbi8qIGVzbGludC1wbHVnaW4tZGlzYWJsZSBsaXQgKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBnZXRSZWNlbnQsIGdldFJlY2VudFdpdGhDYWNoZSB9IGZyb20gXCIuL2NhY2hlZC1oaXN0b3J5XCI7XG5pbXBvcnQgeyBjb21wdXRlSGlzdG9yeSwgZmV0Y2hEYXRlIH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhU3RhdGVIaXN0b3J5RGF0YSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiaGFzc0NoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZpbHRlclR5cGU6IFN0cmluZyxcblxuICAgICAgY2FjaGVDb25maWc6IE9iamVjdCxcblxuICAgICAgc3RhcnRUaW1lOiBEYXRlLFxuICAgICAgZW5kVGltZTogRGF0ZSxcblxuICAgICAgZW50aXR5SWQ6IFN0cmluZyxcblxuICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFwiZmlsdGVyQ2hhbmdlZERlYm91bmNlcihmaWx0ZXJUeXBlLCBlbnRpdHlJZCwgc3RhcnRUaW1lLCBlbmRUaW1lLCBjYWNoZUNvbmZpZywgbG9jYWxpemUpXCIsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2VkRGVib3VuY2VyKFxuICAgICAgdGhpcy5maWx0ZXJUeXBlLFxuICAgICAgdGhpcy5lbnRpdHlJZCxcbiAgICAgIHRoaXMuc3RhcnRUaW1lLFxuICAgICAgdGhpcy5lbmRUaW1lLFxuICAgICAgdGhpcy5jYWNoZUNvbmZpZyxcbiAgICAgIHRoaXMubG9jYWxpemVcbiAgICApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fcmVmcmVzaFRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBoYXNzQ2hhbmdlZChuZXdIYXNzLCBvbGRIYXNzKSB7XG4gICAgaWYgKCFvbGRIYXNzICYmICF0aGlzLl9tYWRlRmlyc3RDYWxsKSB7XG4gICAgICB0aGlzLmZpbHRlckNoYW5nZWREZWJvdW5jZXIoXG4gICAgICAgIHRoaXMuZmlsdGVyVHlwZSxcbiAgICAgICAgdGhpcy5lbnRpdHlJZCxcbiAgICAgICAgdGhpcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5jYWNoZUNvbmZpZyxcbiAgICAgICAgdGhpcy5sb2NhbGl6ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJDaGFuZ2VkRGVib3VuY2VyKC4uLmFyZ3MpIHtcbiAgICB0aGlzLl9kZWJvdW5jZUZpbHRlckNoYW5nZWQgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICB0aGlzLl9kZWJvdW5jZUZpbHRlckNoYW5nZWQsXG4gICAgICB0aW1lT3V0LmFmdGVyKDApLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckNoYW5nZWQoLi4uYXJncyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlckNoYW5nZWQoXG4gICAgZmlsdGVyVHlwZSxcbiAgICBlbnRpdHlJZCxcbiAgICBzdGFydFRpbWUsXG4gICAgZW5kVGltZSxcbiAgICBjYWNoZUNvbmZpZyxcbiAgICBsb2NhbGl6ZVxuICApIHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FjaGVDb25maWcgJiYgIWNhY2hlQ29uZmlnLmNhY2hlS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbG9jYWxpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFkZUZpcnN0Q2FsbCA9IHRydWU7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLmhhc3MubGFuZ3VhZ2U7XG4gICAgbGV0IGRhdGE7XG5cbiAgICBpZiAoZmlsdGVyVHlwZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgIGlmICghc3RhcnRUaW1lIHx8ICFlbmRUaW1lKSByZXR1cm47XG5cbiAgICAgIGRhdGEgPSBmZXRjaERhdGUodGhpcy5oYXNzLCBzdGFydFRpbWUsIGVuZFRpbWUpLnRoZW4oKGRhdGVIaXN0b3J5KSA9PlxuICAgICAgICBjb21wdXRlSGlzdG9yeSh0aGlzLmhhc3MsIGRhdGVIaXN0b3J5LCBsb2NhbGl6ZSwgbGFuZ3VhZ2UpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJyZWNlbnQtZW50aXR5XCIpIHtcbiAgICAgIGlmICghZW50aXR5SWQpIHJldHVybjtcbiAgICAgIGlmIChjYWNoZUNvbmZpZykge1xuICAgICAgICBkYXRhID0gdGhpcy5nZXRSZWNlbnRXaXRoQ2FjaGVSZWZyZXNoKFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgICAgIGxvY2FsaXplLFxuICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gZ2V0UmVjZW50KFxuICAgICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NldElzTG9hZGluZyh0cnVlKTtcblxuICAgIGRhdGEudGhlbigoc3RhdGVIaXN0b3J5KSA9PiB7XG4gICAgICB0aGlzLl9zZXREYXRhKHN0YXRlSGlzdG9yeSk7XG4gICAgICB0aGlzLl9zZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVjZW50V2l0aENhY2hlUmVmcmVzaChlbnRpdHlJZCwgY2FjaGVDb25maWcsIGxvY2FsaXplLCBsYW5ndWFnZSkge1xuICAgIGlmICh0aGlzLl9yZWZyZXNoVGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9yZWZyZXNoVGltZW91dElkKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoY2FjaGVDb25maWcucmVmcmVzaCkge1xuICAgICAgdGhpcy5fcmVmcmVzaFRpbWVvdXRJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGdldFJlY2VudFdpdGhDYWNoZShcbiAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgY2FjaGVDb25maWcsXG4gICAgICAgICAgbG9jYWxpemUsXG4gICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKS50aGVuKChzdGF0ZUhpc3RvcnkpID0+IHtcbiAgICAgICAgICB0aGlzLl9zZXREYXRhKHsgLi4uc3RhdGVIaXN0b3J5IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGNhY2hlQ29uZmlnLnJlZnJlc2ggKiAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlY2VudFdpdGhDYWNoZShcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIGVudGl0eUlkLFxuICAgICAgY2FjaGVDb25maWcsXG4gICAgICBsb2NhbGl6ZSxcbiAgICAgIGxhbmd1YWdlXG4gICAgKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc3RhdGUtaGlzdG9yeS1kYXRhXCIsIEhhU3RhdGVIaXN0b3J5RGF0YSk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRGlzcGxheSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZGlzcGxheVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IERPTUFJTlNfVVNFX0xBU1RfVVBEQVRFRCA9IFtcImNsaW1hdGVcIiwgXCJ3YXRlcl9oZWF0ZXJcIl07XG5jb25zdCBMSU5FX0FUVFJJQlVURVNfVE9fS0VFUCA9IFtcbiAgXCJ0ZW1wZXJhdHVyZVwiLFxuICBcImN1cnJlbnRfdGVtcGVyYXR1cmVcIixcbiAgXCJ0YXJnZXRfdGVtcF9sb3dcIixcbiAgXCJ0YXJnZXRfdGVtcF9oaWdoXCIsXG4gIFwiaHZhY19hY3Rpb25cIixcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNoYXJ0U3RhdGUge1xuICBzdGF0ZTogc3RyaW5nO1xuICBsYXN0X2NoYW5nZWQ6IHN0cmluZztcbiAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNoYXJ0RW50aXR5IHtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIHN0YXRlczogTGluZUNoYXJ0U3RhdGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRVbml0IHtcbiAgdW5pdDogc3RyaW5nO1xuICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIGRhdGE6IExpbmVDaGFydEVudGl0eVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lU3RhdGUge1xuICBzdGF0ZV9sb2NhbGl6ZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBsYXN0X2NoYW5nZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZUVudGl0eSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIGRhdGE6IFRpbWVsaW5lU3RhdGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5UmVzdWx0IHtcbiAgbGluZTogTGluZUNoYXJ0VW5pdFtdO1xuICB0aW1lbGluZTogVGltZWxpbmVFbnRpdHlbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUmVjZW50ID0gKFxuICBoYXNzLFxuICBlbnRpdHlJZCxcbiAgc3RhcnRUaW1lLFxuICBlbmRUaW1lLFxuICBza2lwSW5pdGlhbFN0YXRlID0gZmFsc2UsXG4gIHNpZ25pZmljYW50Q2hhbmdlc09ubHk/OiBib29sZWFuXG4pOiBQcm9taXNlPEhhc3NFbnRpdHlbXVtdPiA9PiB7XG4gIGxldCB1cmwgPSBcImhpc3RvcnkvcGVyaW9kXCI7XG4gIGlmIChzdGFydFRpbWUpIHtcbiAgICB1cmwgKz0gXCIvXCIgKyBzdGFydFRpbWUudG9JU09TdHJpbmcoKTtcbiAgfVxuICB1cmwgKz0gXCI/ZmlsdGVyX2VudGl0eV9pZD1cIiArIGVudGl0eUlkO1xuICBpZiAoZW5kVGltZSkge1xuICAgIHVybCArPSBcIiZlbmRfdGltZT1cIiArIGVuZFRpbWUudG9JU09TdHJpbmcoKTtcbiAgfVxuICBpZiAoc2tpcEluaXRpYWxTdGF0ZSkge1xuICAgIHVybCArPSBcIiZza2lwX2luaXRpYWxfc3RhdGVcIjtcbiAgfVxuICBpZiAoc2lnbmlmaWNhbnRDaGFuZ2VzT25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdXJsICs9IGAmc2lnbmlmaWNhbnRfY2hhbmdlc19vbmx5PSR7TnVtYmVyKHNpZ25pZmljYW50Q2hhbmdlc09ubHkpfWA7XG4gIH1cblxuICByZXR1cm4gaGFzcy5jYWxsQXBpKFwiR0VUXCIsIHVybCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGVcbik6IFByb21pc2U8SGFzc0VudGl0eVtdW10+ID0+IHtcbiAgcmV0dXJuIGhhc3MuY2FsbEFwaShcbiAgICBcIkdFVFwiLFxuICAgIGBoaXN0b3J5L3BlcmlvZC8ke3N0YXJ0VGltZS50b0lTT1N0cmluZygpfT9lbmRfdGltZT0ke2VuZFRpbWUudG9JU09TdHJpbmcoKX1gXG4gICk7XG59O1xuXG5jb25zdCBlcXVhbFN0YXRlID0gKG9iajE6IExpbmVDaGFydFN0YXRlLCBvYmoyOiBMaW5lQ2hhcnRTdGF0ZSkgPT5cbiAgb2JqMS5zdGF0ZSA9PT0gb2JqMi5zdGF0ZSAmJlxuICAvLyBUaGV5IGVpdGhlciBib3RoIGhhdmUgYW4gYXR0cmlidXRlcyBvYmplY3Qgb3Igbm90XG4gICghb2JqMS5hdHRyaWJ1dGVzIHx8XG4gICAgTElORV9BVFRSSUJVVEVTX1RPX0tFRVAuZXZlcnkoXG4gICAgICAoYXR0cikgPT4gb2JqMS5hdHRyaWJ1dGVzIVthdHRyXSA9PT0gb2JqMi5hdHRyaWJ1dGVzIVthdHRyXVxuICAgICkpO1xuXG5jb25zdCBwcm9jZXNzVGltZWxpbmVFbnRpdHkgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIHN0YXRlczogSGFzc0VudGl0eVtdXG4pOiBUaW1lbGluZUVudGl0eSA9PiB7XG4gIGNvbnN0IGRhdGE6IFRpbWVsaW5lU3RhdGVbXSA9IFtdO1xuXG4gIGZvciAoY29uc3Qgc3RhdGUgb2Ygc3RhdGVzKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCAmJiBzdGF0ZS5zdGF0ZSA9PT0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnN0YXRlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBkYXRhLnB1c2goe1xuICAgICAgc3RhdGVfbG9jYWxpemU6IGNvbXB1dGVTdGF0ZURpc3BsYXkobG9jYWxpemUsIHN0YXRlLCBsYW5ndWFnZSksXG4gICAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlLmxhc3RfY2hhbmdlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZXNbMF0pLFxuICAgIGVudGl0eV9pZDogc3RhdGVzWzBdLmVudGl0eV9pZCxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3QgcHJvY2Vzc0xpbmVDaGFydEVudGl0aWVzID0gKFxuICB1bml0LFxuICBlbnRpdGllczogSGFzc0VudGl0eVtdW11cbik6IExpbmVDaGFydFVuaXQgPT4ge1xuICBjb25zdCBkYXRhOiBMaW5lQ2hhcnRFbnRpdHlbXSA9IFtdO1xuXG4gIGZvciAoY29uc3Qgc3RhdGVzIG9mIGVudGl0aWVzKSB7XG4gICAgY29uc3QgbGFzdDogSGFzc0VudGl0eSA9IHN0YXRlc1tzdGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKGxhc3QpO1xuICAgIGNvbnN0IHByb2Nlc3NlZFN0YXRlczogTGluZUNoYXJ0U3RhdGVbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGxldCBwcm9jZXNzZWRTdGF0ZTogTGluZUNoYXJ0U3RhdGU7XG5cbiAgICAgIGlmIChET01BSU5TX1VTRV9MQVNUX1VQREFURUQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICBwcm9jZXNzZWRTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZS5sYXN0X3VwZGF0ZWQsXG4gICAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIExJTkVfQVRUUklCVVRFU19UT19LRUVQKSB7XG4gICAgICAgICAgaWYgKGF0dHIgaW4gc3RhdGUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcHJvY2Vzc2VkU3RhdGUuYXR0cmlidXRlcyFbYXR0cl0gPSBzdGF0ZS5hdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzc2VkU3RhdGUgPSBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzZWRTdGF0ZXMubGVuZ3RoID4gMSAmJlxuICAgICAgICBlcXVhbFN0YXRlKFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlLFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlc1twcm9jZXNzZWRTdGF0ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSAmJlxuICAgICAgICBlcXVhbFN0YXRlKHByb2Nlc3NlZFN0YXRlLCBwcm9jZXNzZWRTdGF0ZXNbcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCAtIDJdKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzZWRTdGF0ZXMucHVzaChwcm9jZXNzZWRTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIGRvbWFpbixcbiAgICAgIG5hbWU6IGNvbXB1dGVTdGF0ZU5hbWUobGFzdCksXG4gICAgICBlbnRpdHlfaWQ6IGxhc3QuZW50aXR5X2lkLFxuICAgICAgc3RhdGVzOiBwcm9jZXNzZWRTdGF0ZXMsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVuaXQsXG4gICAgaWRlbnRpZmllcjogZW50aXRpZXMubWFwKChzdGF0ZXMpID0+IHN0YXRlc1swXS5lbnRpdHlfaWQpLmpvaW4oXCJcIiksXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlSGlzdG9yeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGVIaXN0b3J5OiBIYXNzRW50aXR5W11bXSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKTogSGlzdG9yeVJlc3VsdCA9PiB7XG4gIGNvbnN0IGxpbmVDaGFydERldmljZXM6IHsgW3VuaXQ6IHN0cmluZ106IEhhc3NFbnRpdHlbXVtdIH0gPSB7fTtcbiAgY29uc3QgdGltZWxpbmVEZXZpY2VzOiBUaW1lbGluZUVudGl0eVtdID0gW107XG4gIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgcmV0dXJuIHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9O1xuICB9XG5cbiAgc3RhdGVIaXN0b3J5LmZvckVhY2goKHN0YXRlSW5mbykgPT4ge1xuICAgIGlmIChzdGF0ZUluZm8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVXaXRoVW5pdCA9IHN0YXRlSW5mby5maW5kKFxuICAgICAgKHN0YXRlKSA9PiBcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIiBpbiBzdGF0ZS5hdHRyaWJ1dGVzXG4gICAgKTtcblxuICAgIGxldCB1bml0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoc3RhdGVXaXRoVW5pdCkge1xuICAgICAgdW5pdCA9IHN0YXRlV2l0aFVuaXQuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlSW5mb1swXSkgPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgICB1bml0ID0gaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmU7XG4gICAgfSBlbHNlIGlmIChjb21wdXRlU3RhdGVEb21haW4oc3RhdGVJbmZvWzBdKSA9PT0gXCJ3YXRlcl9oZWF0ZXJcIikge1xuICAgICAgdW5pdCA9IGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlO1xuICAgIH1cblxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGltZWxpbmVEZXZpY2VzLnB1c2goXG4gICAgICAgIHByb2Nlc3NUaW1lbGluZUVudGl0eShsb2NhbGl6ZSwgbGFuZ3VhZ2UsIHN0YXRlSW5mbylcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh1bml0IGluIGxpbmVDaGFydERldmljZXMpIHtcbiAgICAgIGxpbmVDaGFydERldmljZXNbdW5pdF0ucHVzaChzdGF0ZUluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdID0gW3N0YXRlSW5mb107XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1bml0U3RhdGVzID0gT2JqZWN0LmtleXMobGluZUNoYXJ0RGV2aWNlcykubWFwKCh1bml0KSA9PlxuICAgIHByb2Nlc3NMaW5lQ2hhcnRFbnRpdGllcyh1bml0LCBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdKVxuICApO1xuXG4gIHJldHVybiB7IGxpbmU6IHVuaXRTdGF0ZXMsIHRpbWVsaW5lOiB0aW1lbGluZURldmljZXMgfTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQVRBO0FBV0E7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQXhCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9VQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUF2QkE7QUEyQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBM21CQTtBQUNBO0FBMm1CQTs7Ozs7Ozs7Ozs7O0FDOW5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUlBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBVUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBRkE7QUFTQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBWkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQTVDQTtBQWtEQTtBQUNBO0FBQ0E7QUFGQTtBQXREQTtBQTJEQTtBQUNBO0FBQ0E7QUF0WEE7QUFDQTtBQXNYQTs7Ozs7Ozs7Ozs7O0FDL1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWEE7QUFOQTtBQTBCQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBaENBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOU1BO0FBQ0E7QUE4TUE7Ozs7Ozs7Ozs7OztBQ3hOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyR0E7QUFDQTtBQXFHQTs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXRCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFyS0E7QUFDQTtBQXFLQTs7Ozs7Ozs7Ozs7O0FDaExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQTRDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9