(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~leaflet-draw"],{

/***/ "./node_modules/leaflet-draw/dist/leaflet.draw.js":
/*!********************************************************!*\
  !*** ./node_modules/leaflet-draw/dist/leaflet.draw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Leaflet.draw 1.0.4, a plugin that adds drawing and editing tools to Leaflet powered maps.
 (c) 2012-2017, Jacob Toye, Jon West, Smartrak, Leaflet

 https://github.com/Leaflet/Leaflet.draw
 http://leafletjs.com
 */
!function (t, e, i) {
  function o(t, e) {
    for (; (t = t.parentElement) && !t.classList.contains(e););

    return t;
  }

  L.drawVersion = "1.0.4", L.Draw = {}, L.drawLocal = {
    draw: {
      toolbar: {
        actions: {
          title: "Cancel drawing",
          text: "Cancel"
        },
        finish: {
          title: "Finish drawing",
          text: "Finish"
        },
        undo: {
          title: "Delete last point drawn",
          text: "Delete last point"
        },
        buttons: {
          polyline: "Draw a polyline",
          polygon: "Draw a polygon",
          rectangle: "Draw a rectangle",
          circle: "Draw a circle",
          marker: "Draw a marker",
          circlemarker: "Draw a circlemarker"
        }
      },
      handlers: {
        circle: {
          tooltip: {
            start: "Click and drag to draw circle."
          },
          radius: "Radius"
        },
        circlemarker: {
          tooltip: {
            start: "Click map to place circle marker."
          }
        },
        marker: {
          tooltip: {
            start: "Click map to place marker."
          }
        },
        polygon: {
          tooltip: {
            start: "Click to start drawing shape.",
            cont: "Click to continue drawing shape.",
            end: "Click first point to close this shape."
          }
        },
        polyline: {
          error: "<strong>Error:</strong> shape edges cannot cross!",
          tooltip: {
            start: "Click to start drawing line.",
            cont: "Click to continue drawing line.",
            end: "Click last point to finish line."
          }
        },
        rectangle: {
          tooltip: {
            start: "Click and drag to draw rectangle."
          }
        },
        simpleshape: {
          tooltip: {
            end: "Release mouse to finish drawing."
          }
        }
      }
    },
    edit: {
      toolbar: {
        actions: {
          save: {
            title: "Save changes",
            text: "Save"
          },
          cancel: {
            title: "Cancel editing, discards all changes",
            text: "Cancel"
          },
          clearAll: {
            title: "Clear all layers",
            text: "Clear All"
          }
        },
        buttons: {
          edit: "Edit layers",
          editDisabled: "No layers to edit",
          remove: "Delete layers",
          removeDisabled: "No layers to delete"
        }
      },
      handlers: {
        edit: {
          tooltip: {
            text: "Drag handles or markers to edit features.",
            subtext: "Click cancel to undo changes."
          }
        },
        remove: {
          tooltip: {
            text: "Click on a feature to remove."
          }
        }
      }
    }
  }, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened", L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed", L.Draw.Event.MARKERCONTEXT = "draw:markercontext", L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({
    initialize: function (t, e) {
      this._map = t, this._container = t._container, this._overlayPane = t._panes.overlayPane, this._popupPane = t._panes.popupPane, e && e.shapeOptions && (e.shapeOptions = L.Util.extend({}, this.options.shapeOptions, e.shapeOptions)), L.setOptions(this, e);
      var i = L.version.split(".");
      1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events);
    },
    enable: function () {
      this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", {
        handler: this.type
      }), this._map.fire(L.Draw.Event.DRAWSTART, {
        layerType: this.type
      }));
    },
    disable: function () {
      this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, {
        layerType: this.type
      }), this.fire("disabled", {
        handler: this.type
      }));
    },
    addHooks: function () {
      var t = this._map;
      t && (L.DomUtil.disableTextSelection(), t.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this));
    },
    removeHooks: function () {
      this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this));
    },
    setOptions: function (t) {
      L.setOptions(this, t);
    },
    _fireCreatedEvent: function (t) {
      this._map.fire(L.Draw.Event.CREATED, {
        layer: t,
        layerType: this.type
      });
    },
    _cancelDrawing: function (t) {
      27 === t.keyCode && (this._map.fire("draw:canceled", {
        layerType: this.type
      }), this.disable());
    }
  }), L.Draw.Polyline = L.Draw.Feature.extend({
    statics: {
      TYPE: "polyline"
    },
    Poly: L.Polyline,
    options: {
      allowIntersection: !0,
      repeatMode: !1,
      drawError: {
        color: "#b00b00",
        timeout: 2500
      },
      icon: new L.DivIcon({
        iconSize: new L.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon"
      }),
      touchIcon: new L.DivIcon({
        iconSize: new L.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
      }),
      guidelineDistance: 20,
      maxGuideLineLength: 4e3,
      shapeOptions: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: .5,
        fill: !1,
        clickable: !0
      },
      metric: !0,
      feet: !0,
      nautic: !1,
      showLength: !0,
      zIndexOffset: 2e3,
      factor: 1,
      maxPoints: 0
    },
    initialize: function (t, e) {
      L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, e && e.drawError && (e.drawError = L.Util.extend({}, this.options.drawError, e.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, t, e);
    },
    addHooks: function () {
      L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup(), this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
        icon: L.divIcon({
          className: "leaflet-mouse-marker",
          iconAnchor: [20, 20],
          iconSize: [40, 40]
        }),
        opacity: 0,
        zIndexOffset: this.options.zIndexOffset
      })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this));
    },
    removeHooks: function () {
      L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this);
    },
    deleteLastVertex: function () {
      if (!(this._markers.length <= 1)) {
        var t = this._markers.pop(),
            e = this._poly,
            i = e.getLatLngs(),
            o = i.splice(-1, 1)[0];

        this._poly.setLatLngs(i), this._markerGroup.removeLayer(t), e.getLatLngs().length < 2 && this._map.removeLayer(e), this._vertexChanged(o, !1);
      }
    },
    addVertex: function (t) {
      if (this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(t)) return void this._showErrorTooltip();
      this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(t)), this._poly.addLatLng(t), 2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly), this._vertexChanged(t, !0);
    },
    completeShape: function () {
      this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable());
    },
    _finishShape: function () {
      var t = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(),
          e = this._poly.newLatLngIntersects(t[t.length - 1]);

      if (!this.options.allowIntersection && e || !this._shapeIsValid()) return void this._showErrorTooltip();
      this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
    },
    _shapeIsValid: function () {
      return !0;
    },
    _onZoomEnd: function () {
      null !== this._markers && this._updateGuide();
    },
    _onMouseMove: function (t) {
      var e = this._map.mouseEventToLayerPoint(t.originalEvent),
          i = this._map.layerPointToLatLng(e);

      this._currentLatLng = i, this._updateTooltip(i), this._updateGuide(e), this._mouseMarker.setLatLng(i), L.DomEvent.preventDefault(t.originalEvent);
    },
    _vertexChanged: function (t, e) {
      this._map.fire(L.Draw.Event.DRAWVERTEX, {
        layers: this._markerGroup
      }), this._updateFinishHandler(), this._updateRunningMeasure(t, e), this._clearGuides(), this._updateTooltip();
    },
    _onMouseDown: function (t) {
      if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
        this._onMouseMove(t), this._clickHandled = !0, this._disableNewMarkers();
        var e = t.originalEvent,
            i = e.clientX,
            o = e.clientY;

        this._startPoint.call(this, i, o);
      }
    },
    _startPoint: function (t, e) {
      this._mouseDownOrigin = L.point(t, e);
    },
    _onMouseUp: function (t) {
      var e = t.originalEvent,
          i = e.clientX,
          o = e.clientY;
      this._endPoint.call(this, i, o, t), this._clickHandled = null;
    },
    _endPoint: function (e, i, o) {
      if (this._mouseDownOrigin) {
        var a = L.point(e, i).distanceTo(this._mouseDownOrigin),
            n = this._calculateFinishDistance(o.latlng);

        this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(o.latlng), this._finishShape()) : n < 10 && L.Browser.touch ? this._finishShape() : Math.abs(a) < 9 * (t.devicePixelRatio || 1) && this.addVertex(o.latlng), this._enableNewMarkers();
      }

      this._mouseDownOrigin = null;
    },
    _onTouch: function (t) {
      var e,
          i,
          o = t.originalEvent;
      !o.touches || !o.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = o.touches[0].clientX, i = o.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, e, i), this._endPoint.call(this, e, i, t), this._touchHandled = null), this._clickHandled = null;
    },
    _onMouseOut: function () {
      this._tooltip && this._tooltip._onMouseOut.call(this._tooltip);
    },
    _calculateFinishDistance: function (t) {
      var e;

      if (this._markers.length > 0) {
        var i;
        if (this.type === L.Draw.Polyline.TYPE) i = this._markers[this._markers.length - 1];else {
          if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
          i = this._markers[0];
        }

        var o = this._map.latLngToContainerPoint(i.getLatLng()),
            a = new L.Marker(t, {
          icon: this.options.icon,
          zIndexOffset: 2 * this.options.zIndexOffset
        }),
            n = this._map.latLngToContainerPoint(a.getLatLng());

        e = o.distanceTo(n);
      } else e = 1 / 0;

      return e;
    },
    _updateFinishHandler: function () {
      var t = this._markers.length;
      t > 1 && this._markers[t - 1].on("click", this._finishShape, this), t > 2 && this._markers[t - 2].off("click", this._finishShape, this);
    },
    _createMarker: function (t) {
      var e = new L.Marker(t, {
        icon: this.options.icon,
        zIndexOffset: 2 * this.options.zIndexOffset
      });
      return this._markerGroup.addLayer(e), e;
    },
    _updateGuide: function (t) {
      var e = this._markers ? this._markers.length : 0;
      e > 0 && (t = t || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t));
    },
    _updateTooltip: function (t) {
      var e = this._getTooltipText();

      t && this._tooltip.updatePosition(t), this._errorShown || this._tooltip.updateContent(e);
    },
    _drawGuide: function (t, e) {
      var i,
          o,
          a,
          n = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))),
          s = this.options.guidelineDistance,
          r = this.options.maxGuideLineLength,
          l = n > r ? n - r : s;

      for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); l < n; l += this.options.guidelineDistance) i = l / n, o = {
        x: Math.floor(t.x * (1 - i) + i * e.x),
        y: Math.floor(t.y * (1 - i) + i * e.y)
      }, a = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer), a.style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(a, o);
    },
    _updateGuideColor: function (t) {
      if (this._guidesContainer) for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++) this._guidesContainer.childNodes[e].style.backgroundColor = t;
    },
    _clearGuides: function () {
      if (this._guidesContainer) for (; this._guidesContainer.firstChild;) this._guidesContainer.removeChild(this._guidesContainer.firstChild);
    },
    _getTooltipText: function () {
      var t,
          e,
          i = this.options.showLength;
      return 0 === this._markers.length ? t = {
        text: L.drawLocal.draw.handlers.polyline.tooltip.start
      } : (e = i ? this._getMeasurementString() : "", t = 1 === this._markers.length ? {
        text: L.drawLocal.draw.handlers.polyline.tooltip.cont,
        subtext: e
      } : {
        text: L.drawLocal.draw.handlers.polyline.tooltip.end,
        subtext: e
      }), t;
    },
    _updateRunningMeasure: function (t, e) {
      var i,
          o,
          a = this._markers.length;
      1 === this._markers.length ? this._measurementRunningTotal = 0 : (i = a - (e ? 2 : 1), o = L.GeometryUtil.isVersion07x() ? t.distanceTo(this._markers[i].getLatLng()) * (this.options.factor || 1) : this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += o * (e ? 1 : -1));
    },
    _getMeasurementString: function () {
      var t,
          e = this._currentLatLng,
          i = this._markers[this._markers.length - 1].getLatLng();

      return t = L.GeometryUtil.isVersion07x() ? i && e && e.distanceTo ? this._measurementRunningTotal + e.distanceTo(i) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : i && e ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(t, this.options.metric, this.options.feet, this.options.nautic, this.options.precision);
    },
    _showErrorTooltip: function () {
      this._errorShown = !0, this._tooltip.showAsError().updateContent({
        text: this.options.drawError.message
      }), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({
        color: this.options.drawError.color
      }), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout);
    },
    _hideErrorTooltip: function () {
      this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({
        color: this.options.shapeOptions.color
      });
    },
    _clearHideErrorTimeout: function () {
      this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null);
    },
    _disableNewMarkers: function () {
      this._disableMarkers = !0;
    },
    _enableNewMarkers: function () {
      setTimeout(function () {
        this._disableMarkers = !1;
      }.bind(this), 50);
    },
    _cleanUpShape: function () {
      this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this);
    },
    _fireCreatedEvent: function () {
      var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);

      L.Draw.Feature.prototype._fireCreatedEvent.call(this, t);
    }
  }), L.Draw.Polygon = L.Draw.Polyline.extend({
    statics: {
      TYPE: "polygon"
    },
    Poly: L.Polygon,
    options: {
      showArea: !1,
      showLength: !1,
      shapeOptions: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: .5,
        fill: !0,
        fillColor: null,
        fillOpacity: .2,
        clickable: !0
      },
      metric: !0,
      feet: !0,
      nautic: !1,
      precision: {}
    },
    initialize: function (t, e) {
      L.Draw.Polyline.prototype.initialize.call(this, t, e), this.type = L.Draw.Polygon.TYPE;
    },
    _updateFinishHandler: function () {
      var t = this._markers.length;
      1 === t && this._markers[0].on("click", this._finishShape, this), t > 2 && (this._markers[t - 1].on("dblclick", this._finishShape, this), t > 3 && this._markers[t - 2].off("dblclick", this._finishShape, this));
    },
    _getTooltipText: function () {
      var t, e;
      return 0 === this._markers.length ? t = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (t = L.drawLocal.draw.handlers.polygon.tooltip.cont, e = this._getMeasurementString()) : (t = L.drawLocal.draw.handlers.polygon.tooltip.end, e = this._getMeasurementString()), {
        text: t,
        subtext: e
      };
    },
    _getMeasurementString: function () {
      var t = this._area,
          e = "";
      return t || this.options.showLength ? (this.options.showLength && (e = L.Draw.Polyline.prototype._getMeasurementString.call(this)), t && (e += "<br>" + L.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)), e) : null;
    },
    _shapeIsValid: function () {
      return this._markers.length >= 3;
    },
    _vertexChanged: function (t, e) {
      var i;
      !this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(i)), L.Draw.Polyline.prototype._vertexChanged.call(this, t, e);
    },
    _cleanUpShape: function () {
      var t = this._markers.length;
      t > 0 && (this._markers[0].off("click", this._finishShape, this), t > 2 && this._markers[t - 1].off("dblclick", this._finishShape, this));
    }
  }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({
    options: {
      repeatMode: !1
    },
    initialize: function (t, e) {
      this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, t, e);
    },
    addHooks: function () {
      L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({
        text: this._initialLabelText
      }), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this), e.addEventListener("touchstart", L.DomEvent.preventDefault, {
        passive: !1
      }));
    },
    removeHooks: function () {
      L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(e, "mouseup", this._onMouseUp, this), L.DomEvent.off(e, "touchend", this._onMouseUp, this), e.removeEventListener("touchstart", L.DomEvent.preventDefault), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1;
    },
    _getTooltipText: function () {
      return {
        text: this._endLabelText
      };
    },
    _onMouseDown: function (t) {
      this._isDrawing = !0, this._startLatLng = t.latlng, L.DomEvent.on(e, "mouseup", this._onMouseUp, this).on(e, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent);
    },
    _onMouseMove: function (t) {
      var e = t.latlng;
      this._tooltip.updatePosition(e), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(e));
    },
    _onMouseUp: function () {
      this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
    }
  }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({
    statics: {
      TYPE: "rectangle"
    },
    options: {
      shapeOptions: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: .5,
        fill: !0,
        fillColor: null,
        fillOpacity: .2,
        clickable: !0
      },
      showArea: !0,
      metric: !0
    },
    initialize: function (t, e) {
      this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, t, e);
    },
    disable: function () {
      this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this));
    },
    _onMouseUp: function (t) {
      if (!this._shape && !this._isCurrentlyTwoClickDrawing) return void (this._isCurrentlyTwoClickDrawing = !0);
      this._isCurrentlyTwoClickDrawing && !o(t.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this);
    },
    _drawShape: function (t) {
      this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, t)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, t), this.options.shapeOptions), this._map.addLayer(this._shape));
    },
    _fireCreatedEvent: function () {
      var t = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);

      L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t);
    },
    _getTooltipText: function () {
      var t,
          e,
          i,
          o = L.Draw.SimpleShape.prototype._getTooltipText.call(this),
          a = this._shape,
          n = this.options.showArea;

      return a && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), e = L.GeometryUtil.geodesicArea(t), i = n ? L.GeometryUtil.readableArea(e, this.options.metric) : ""), {
        text: o.text,
        subtext: i
      };
    }
  }), L.Draw.Marker = L.Draw.Feature.extend({
    statics: {
      TYPE: "marker"
    },
    options: {
      icon: new L.Icon.Default(),
      repeatMode: !1,
      zIndexOffset: 2e3
    },
    initialize: function (t, e) {
      this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, t, e);
    },
    addHooks: function () {
      L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({
        text: this._initialLabelText
      }), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
        icon: L.divIcon({
          className: "leaflet-mouse-marker",
          iconAnchor: [20, 20],
          iconSize: [40, 40]
        }),
        opacity: 0,
        zIndexOffset: this.options.zIndexOffset
      })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this));
    },
    removeHooks: function () {
      L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this), this._marker && (this._marker.off("click", this._onClick, this), this._map.removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this));
    },
    _onMouseMove: function (t) {
      var e = t.latlng;
      this._tooltip.updatePosition(e), this._mouseMarker.setLatLng(e), this._marker ? (e = this._mouseMarker.getLatLng(), this._marker.setLatLng(e)) : (this._marker = this._createMarker(e), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker));
    },
    _createMarker: function (t) {
      return new L.Marker(t, {
        icon: this.options.icon,
        zIndexOffset: this.options.zIndexOffset
      });
    },
    _onClick: function () {
      this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
    },
    _onTouch: function (t) {
      this._onMouseMove(t), this._onClick();
    },
    _fireCreatedEvent: function () {
      var t = new L.Marker.Touch(this._marker.getLatLng(), {
        icon: this.options.icon
      });

      L.Draw.Feature.prototype._fireCreatedEvent.call(this, t);
    }
  }), L.Draw.CircleMarker = L.Draw.Marker.extend({
    statics: {
      TYPE: "circlemarker"
    },
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 4,
      opacity: .5,
      fill: !0,
      fillColor: null,
      fillOpacity: .2,
      clickable: !0,
      zIndexOffset: 2e3
    },
    initialize: function (t, e) {
      this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, t, e);
    },
    _fireCreatedEvent: function () {
      var t = new L.CircleMarker(this._marker.getLatLng(), this.options);

      L.Draw.Feature.prototype._fireCreatedEvent.call(this, t);
    },
    _createMarker: function (t) {
      return new L.CircleMarker(t, this.options);
    }
  }), L.Draw.Circle = L.Draw.SimpleShape.extend({
    statics: {
      TYPE: "circle"
    },
    options: {
      shapeOptions: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: .5,
        fill: !0,
        fillColor: null,
        fillOpacity: .2,
        clickable: !0
      },
      showRadius: !0,
      metric: !0,
      feet: !0,
      nautic: !1
    },
    initialize: function (t, e) {
      this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, t, e);
    },
    _drawShape: function (t) {
      if (L.GeometryUtil.isVersion07x()) var e = this._startLatLng.distanceTo(t);else var e = this._map.distance(this._startLatLng, t);
      this._shape ? this._shape.setRadius(e) : (this._shape = new L.Circle(this._startLatLng, e, this.options.shapeOptions), this._map.addLayer(this._shape));
    },
    _fireCreatedEvent: function () {
      var t = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);

      L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t);
    },
    _onMouseMove: function (t) {
      var e,
          i = t.latlng,
          o = this.options.showRadius,
          a = this.options.metric;

      if (this._tooltip.updatePosition(i), this._isDrawing) {
        this._drawShape(i), e = this._shape.getRadius().toFixed(1);
        var n = "";
        o && (n = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(e, a, this.options.feet, this.options.nautic)), this._tooltip.updateContent({
          text: this._endLabelText,
          subtext: n
        });
      }
    }
  }), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({
    initialize: function (t, e) {
      this._marker = t, L.setOptions(this, e);
    },
    addHooks: function () {
      var t = this._marker;
      t.dragging.enable(), t.on("dragend", this._onDragEnd, t), this._toggleMarkerHighlight();
    },
    removeHooks: function () {
      var t = this._marker;
      t.dragging.disable(), t.off("dragend", this._onDragEnd, t), this._toggleMarkerHighlight();
    },
    _onDragEnd: function (t) {
      var e = t.target;
      e.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, {
        layer: e
      });
    },
    _toggleMarkerHighlight: function () {
      var t = this._marker._icon;
      t && (t.style.display = "none", L.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(t, "leaflet-edit-marker-selected"), this._offsetMarker(t, -4)) : (L.DomUtil.addClass(t, "leaflet-edit-marker-selected"), this._offsetMarker(t, 4)), t.style.display = "");
    },
    _offsetMarker: function (t, e) {
      var i = parseInt(t.style.marginTop, 10) - e,
          o = parseInt(t.style.marginLeft, 10) - e;
      t.style.marginTop = i + "px", t.style.marginLeft = o + "px";
    }
  }), L.Marker.addInitHook(function () {
    L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({
    initialize: function (t) {
      this.latlngs = [t._latlngs], t._holes && (this.latlngs = this.latlngs.concat(t._holes)), this._poly = t, this._poly.on("revert-edited", this._updateLatLngs, this);
    },
    _defaultShape: function () {
      return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs;
    },
    _eachVertexHandler: function (t) {
      for (var e = 0; e < this._verticesHandlers.length; e++) t(this._verticesHandlers[e]);
    },
    addHooks: function () {
      this._initHandlers(), this._eachVertexHandler(function (t) {
        t.addHooks();
      });
    },
    removeHooks: function () {
      this._eachVertexHandler(function (t) {
        t.removeHooks();
      });
    },
    updateMarkers: function () {
      this._eachVertexHandler(function (t) {
        t.updateMarkers();
      });
    },
    _initHandlers: function () {
      this._verticesHandlers = [];

      for (var t = 0; t < this.latlngs.length; t++) this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[t], this._poly.options.poly));
    },
    _updateLatLngs: function (t) {
      this.latlngs = [t.layer._latlngs], t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes));
    }
  }), L.Edit.PolyVerticesEdit = L.Handler.extend({
    options: {
      icon: new L.DivIcon({
        iconSize: new L.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon"
      }),
      touchIcon: new L.DivIcon({
        iconSize: new L.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
      }),
      drawError: {
        color: "#b00b00",
        timeout: 1e3
      }
    },
    initialize: function (t, e, i) {
      L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = t, i && i.drawError && (i.drawError = L.Util.extend({}, this.options.drawError, i.drawError)), this._latlngs = e, L.setOptions(this, i);
    },
    _defaultShape: function () {
      return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs;
    },
    addHooks: function () {
      var t = this._poly,
          e = t._path;
      t instanceof L.Polygon || (t.options.fill = !1, t.options.editing && (t.options.editing.fill = !1)), e && t.options.editing && t.options.editing.className && (t.options.original.className && t.options.original.className.split(" ").forEach(function (t) {
        L.DomUtil.removeClass(e, t);
      }), t.options.editing.className.split(" ").forEach(function (t) {
        L.DomUtil.addClass(e, t);
      })), t.setStyle(t.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup));
    },
    removeHooks: function () {
      var t = this._poly,
          e = t._path;
      e && t.options.editing && t.options.editing.className && (t.options.editing.className.split(" ").forEach(function (t) {
        L.DomUtil.removeClass(e, t);
      }), t.options.original.className && t.options.original.className.split(" ").forEach(function (t) {
        L.DomUtil.addClass(e, t);
      })), t.setStyle(t.options.original), t._map && (t._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers);
    },
    updateMarkers: function () {
      this._markerGroup.clearLayers(), this._initMarkers();
    },
    _initMarkers: function () {
      this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._markers = [];

      var t,
          e,
          i,
          o,
          a = this._defaultShape();

      for (t = 0, i = a.length; t < i; t++) o = this._createMarker(a[t], t), o.on("click", this._onMarkerClick, this), o.on("contextmenu", this._onContextMenu, this), this._markers.push(o);

      var n, s;

      for (t = 0, e = i - 1; t < i; e = t++) (0 !== t || L.Polygon && this._poly instanceof L.Polygon) && (n = this._markers[e], s = this._markers[t], this._createMiddleMarker(n, s), this._updatePrevNext(n, s));
    },
    _createMarker: function (t, e) {
      var i = new L.Marker.Touch(t, {
        draggable: !0,
        icon: this.options.icon
      });
      return i._origLatLng = t, i._index = e, i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(i), i;
    },
    _onMarkerDragStart: function () {
      this._poly.fire("editstart");
    },
    _spliceLatLngs: function () {
      var t = this._defaultShape(),
          e = [].splice.apply(t, arguments);

      return this._poly._convertLatLngs(t, !0), this._poly.redraw(), e;
    },
    _removeMarker: function (t) {
      var e = t._index;
      this._markerGroup.removeLayer(t), this._markers.splice(e, 1), this._spliceLatLngs(e, 1), this._updateIndexes(e, -1), t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this);
    },
    _fireEdit: function () {
      this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
        layers: this._markerGroup,
        poly: this._poly
      });
    },
    _onMarkerDrag: function (t) {
      var e = t.target,
          i = this._poly,
          o = L.LatLngUtil.cloneLatLng(e._origLatLng);

      if (L.extend(e._origLatLng, e._latlng), i.options.poly) {
        var a = i._map._editTooltip;

        if (!i.options.poly.allowIntersection && i.intersects()) {
          L.extend(e._origLatLng, o), e.setLatLng(o);
          var n = i.options.color;
          i.setStyle({
            color: this.options.drawError.color
          }), a && a.updateContent({
            text: L.drawLocal.draw.handlers.polyline.error
          }), setTimeout(function () {
            i.setStyle({
              color: n
            }), a && a.updateContent({
              text: L.drawLocal.edit.handlers.edit.tooltip.text,
              subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
            });
          }, 1e3);
        }
      }

      e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)), e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)), this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0), this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);

      var s = this._poly.getLatLngs();

      this._poly._convertLatLngs(s, !0), this._poly.redraw(), this._poly.fire("editdrag");
    },
    _onMarkerClick: function (t) {
      var e = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3,
          i = t.target;
      this._defaultShape().length < e || (this._removeMarker(i), this._updatePrevNext(i._prev, i._next), i._middleLeft && this._markerGroup.removeLayer(i._middleLeft), i._middleRight && this._markerGroup.removeLayer(i._middleRight), i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null, this._fireEdit());
    },
    _onContextMenu: function (t) {
      var e = t.target;
      this._poly;
      this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, {
        marker: e,
        layers: this._markerGroup,
        poly: this._poly
      }), L.DomEvent.stopPropagation;
    },
    _onTouchMove: function (t) {
      var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
          i = this._map.layerPointToLatLng(e),
          o = t.target;

      L.extend(o._origLatLng, i), o._middleLeft && o._middleLeft.setLatLng(this._getMiddleLatLng(o._prev, o)), o._middleRight && o._middleRight.setLatLng(this._getMiddleLatLng(o, o._next)), this._poly.redraw(), this.updateMarkers();
    },
    _updateIndexes: function (t, e) {
      this._markerGroup.eachLayer(function (i) {
        i._index > t && (i._index += e);
      });
    },
    _createMiddleMarker: function (t, e) {
      var i,
          o,
          a,
          n = this._getMiddleLatLng(t, e),
          s = this._createMarker(n);

      s.setOpacity(.6), t._middleRight = e._middleLeft = s, o = function () {
        s.off("touchmove", o, this);
        var a = e._index;
        s._index = a, s.off("click", i, this).on("click", this._onMarkerClick, this), n.lat = s.getLatLng().lat, n.lng = s.getLatLng().lng, this._spliceLatLngs(a, 0, n), this._markers.splice(a, 0, s), s.setOpacity(1), this._updateIndexes(a, 1), e._index++, this._updatePrevNext(t, s), this._updatePrevNext(s, e), this._poly.fire("editstart");
      }, a = function () {
        s.off("dragstart", o, this), s.off("dragend", a, this), s.off("touchmove", o, this), this._createMiddleMarker(t, s), this._createMiddleMarker(s, e);
      }, i = function () {
        o.call(this), a.call(this), this._fireEdit();
      }, s.on("click", i, this).on("dragstart", o, this).on("dragend", a, this).on("touchmove", o, this), this._markerGroup.addLayer(s);
    },
    _updatePrevNext: function (t, e) {
      t && (t._next = e), e && (e._prev = t);
    },
    _getMiddleLatLng: function (t, e) {
      var i = this._poly._map,
          o = i.project(t.getLatLng()),
          a = i.project(e.getLatLng());
      return i.unproject(o._add(a)._divideBy(2));
    }
  }), L.Polyline.addInitHook(function () {
    this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function () {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function () {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    }));
  }), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({
    options: {
      moveIcon: new L.DivIcon({
        iconSize: new L.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
      }),
      resizeIcon: new L.DivIcon({
        iconSize: new L.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
      }),
      touchMoveIcon: new L.DivIcon({
        iconSize: new L.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
      }),
      touchResizeIcon: new L.DivIcon({
        iconSize: new L.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
      })
    },
    initialize: function (t, e) {
      L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = t, L.Util.setOptions(this, e);
    },
    addHooks: function () {
      var t = this._shape;
      this._shape._map && (this._map = this._shape._map, t.setStyle(t.options.editing), t._map && (this._map = t._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup)));
    },
    removeHooks: function () {
      var t = this._shape;

      if (t.setStyle(t.options.original), t._map) {
        this._unbindMarker(this._moveMarker);

        for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._unbindMarker(this._resizeMarkers[e]);

        this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup;
      }

      this._map = null;
    },
    updateMarkers: function () {
      this._markerGroup.clearLayers(), this._initMarkers();
    },
    _initMarkers: function () {
      this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._createMoveMarker(), this._createResizeMarker();
    },
    _createMoveMarker: function () {},
    _createResizeMarker: function () {},
    _createMarker: function (t, e) {
      var i = new L.Marker.Touch(t, {
        draggable: !0,
        icon: e,
        zIndexOffset: 10
      });
      return this._bindMarker(i), this._markerGroup.addLayer(i), i;
    },
    _bindMarker: function (t) {
      t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this);
    },
    _unbindMarker: function (t) {
      t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this);
    },
    _onMarkerDragStart: function (t) {
      t.target.setOpacity(0), this._shape.fire("editstart");
    },
    _fireEdit: function () {
      this._shape.edited = !0, this._shape.fire("edit");
    },
    _onMarkerDrag: function (t) {
      var e = t.target,
          i = e.getLatLng();
      e === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), this._shape.fire("editdrag");
    },
    _onMarkerDragEnd: function (t) {
      t.target.setOpacity(1), this._fireEdit();
    },
    _onTouchStart: function (t) {
      if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t), "function" == typeof this._getCorners) {
        var e = this._getCorners(),
            i = t.target,
            o = i._cornerIndex;

        i.setOpacity(0), this._oppositeCorner = e[(o + 2) % 4], this._toggleCornerMarkers(0, o);
      }

      this._shape.fire("editstart");
    },
    _onTouchMove: function (t) {
      var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
          i = this._map.layerPointToLatLng(e);

      return t.target === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), !1;
    },
    _onTouchEnd: function (t) {
      t.target.setOpacity(1), this.updateMarkers(), this._fireEdit();
    },
    _move: function () {},
    _resize: function () {}
  }), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({
    _createMoveMarker: function () {
      var t = this._shape.getBounds(),
          e = t.getCenter();

      this._moveMarker = this._createMarker(e, this.options.moveIcon);
    },
    _createResizeMarker: function () {
      var t = this._getCorners();

      this._resizeMarkers = [];

      for (var e = 0, i = t.length; e < i; e++) this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)), this._resizeMarkers[e]._cornerIndex = e;
    },
    _onMarkerDragStart: function (t) {
      L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);

      var e = this._getCorners(),
          i = t.target,
          o = i._cornerIndex;

      this._oppositeCorner = e[(o + 2) % 4], this._toggleCornerMarkers(0, o);
    },
    _onMarkerDragEnd: function (t) {
      var e,
          i,
          o = t.target;
      o === this._moveMarker && (e = this._shape.getBounds(), i = e.getCenter(), o.setLatLng(i)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t);
    },
    _move: function (t) {
      for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), o = this._shape.getBounds(), a = o.getCenter(), n = [], s = 0, r = i.length; s < r; s++) e = [i[s].lat - a.lat, i[s].lng - a.lng], n.push([t.lat + e[0], t.lng + e[1]]);

      this._shape.setLatLngs(n), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, {
        layer: this._shape
      });
    },
    _resize: function (t) {
      var e;
      this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)), e = this._shape.getBounds(), this._moveMarker.setLatLng(e.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, {
        layer: this._shape
      });
    },
    _getCorners: function () {
      var t = this._shape.getBounds();

      return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()];
    },
    _toggleCornerMarkers: function (t) {
      for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setOpacity(t);
    },
    _repositionCornerMarkers: function () {
      for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setLatLng(t[e]);
    }
  }), L.Rectangle.addInitHook(function () {
    L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
    _createMoveMarker: function () {
      var t = this._shape.getLatLng();

      this._moveMarker = this._createMarker(t, this.options.moveIcon);
    },
    _createResizeMarker: function () {
      this._resizeMarkers = [];
    },
    _move: function (t) {
      if (this._resizeMarkers.length) {
        var e = this._getResizeMarkerPoint(t);

        this._resizeMarkers[0].setLatLng(e);
      }

      this._shape.setLatLng(t), this._map.fire(L.Draw.Event.EDITMOVE, {
        layer: this._shape
      });
    }
  }), L.CircleMarker.addInitHook(function () {
    L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", function () {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function () {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    });
  }), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({
    _createResizeMarker: function () {
      var t = this._shape.getLatLng(),
          e = this._getResizeMarkerPoint(t);

      this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon));
    },
    _getResizeMarkerPoint: function (t) {
      var e = this._shape._radius * Math.cos(Math.PI / 4),
          i = this._map.project(t);

      return this._map.unproject([i.x + e, i.y - e]);
    },
    _resize: function (t) {
      var e = this._moveMarker.getLatLng();

      L.GeometryUtil.isVersion07x() ? radius = e.distanceTo(t) : radius = this._map.distance(e, t), this._shape.setRadius(radius), this._map.editTooltip && this._map._editTooltip.updateContent({
        text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text,
        subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic)
      }), this._shape.setRadius(radius), this._map.fire(L.Draw.Event.EDITRESIZE, {
        layer: this._shape
      });
    }
  }), L.Circle.addInitHook(function () {
    L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable());
  }), L.Map.mergeOptions({
    touchExtend: !0
  }), L.Map.TouchExtend = L.Handler.extend({
    initialize: function (t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane;
    },
    addHooks: function () {
      L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this));
    },
    removeHooks: function () {
      L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this));
    },
    _touchEvent: function (t, e) {
      var i = {};

      if (void 0 !== t.touches) {
        if (!t.touches.length) return;
        i = t.touches[0];
      } else {
        if ("touch" !== t.pointerType) return;
        if (i = t, !this._filterClick(t)) return;
      }

      var o = this._map.mouseEventToContainerPoint(i),
          a = this._map.mouseEventToLayerPoint(i),
          n = this._map.layerPointToLatLng(a);

      this._map.fire(e, {
        latlng: n,
        layerPoint: a,
        containerPoint: o,
        pageX: i.pageX,
        pageY: i.pageY,
        originalEvent: t
      });
    },
    _filterClick: function (t) {
      var e = t.timeStamp || t.originalEvent.timeStamp,
          i = L.DomEvent._lastClick && e - L.DomEvent._lastClick;
      return i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? (L.DomEvent.stop(t), !1) : (L.DomEvent._lastClick = e, !0);
    },
    _onTouchStart: function (t) {
      if (this._map._loaded) {
        this._touchEvent(t, "touchstart");
      }
    },
    _onTouchEnd: function (t) {
      if (this._map._loaded) {
        this._touchEvent(t, "touchend");
      }
    },
    _onTouchCancel: function (t) {
      if (this._map._loaded) {
        var e = "touchcancel";
        this._detectIE() && (e = "pointercancel"), this._touchEvent(t, e);
      }
    },
    _onTouchLeave: function (t) {
      if (this._map._loaded) {
        this._touchEvent(t, "touchleave");
      }
    },
    _onTouchMove: function (t) {
      if (this._map._loaded) {
        this._touchEvent(t, "touchmove");
      }
    },
    _detectIE: function () {
      var e = t.navigator.userAgent,
          i = e.indexOf("MSIE ");
      if (i > 0) return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);

      if (e.indexOf("Trident/") > 0) {
        var o = e.indexOf("rv:");
        return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
      }

      var a = e.indexOf("Edge/");
      return a > 0 && parseInt(e.substring(a + 5, e.indexOf(".", a)), 10);
    }
  }), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({
    _initInteraction: function () {
      return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy();
    },
    _initInteractionLegacy: function () {
      if (this.options.clickable) {
        var t = this._icon,
            e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
        this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]), L.DomUtil.addClass(t, "leaflet-clickable"), L.DomEvent.on(t, "click", this._onMouseClick, this), L.DomEvent.on(t, "keypress", this._onKeyPress, this);

        for (var i = 0; i < e.length; i++) L.DomEvent.on(t, e[i], this._fireMouseEvent, this);

        L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable());
      }
    },
    _detectIE: function () {
      var e = t.navigator.userAgent,
          i = e.indexOf("MSIE ");
      if (i > 0) return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);

      if (e.indexOf("Trident/") > 0) {
        var o = e.indexOf("rv:");
        return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
      }

      var a = e.indexOf("Edge/");
      return a > 0 && parseInt(e.substring(a + 5, e.indexOf(".", a)), 10);
    }
  }), L.LatLngUtil = {
    cloneLatLngs: function (t) {
      for (var e = [], i = 0, o = t.length; i < o; i++) Array.isArray(t[i]) ? e.push(L.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i]));

      return e;
    },
    cloneLatLng: function (t) {
      return L.latLng(t.lat, t.lng);
    }
  }, function () {
    var t = {
      km: 2,
      ha: 2,
      m: 0,
      mi: 2,
      ac: 2,
      yd: 0,
      ft: 0,
      nm: 2
    };
    L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
      geodesicArea: function (t) {
        var e,
            i,
            o = t.length,
            a = 0,
            n = Math.PI / 180;

        if (o > 2) {
          for (var s = 0; s < o; s++) e = t[s], i = t[(s + 1) % o], a += (i.lng - e.lng) * n * (2 + Math.sin(e.lat * n) + Math.sin(i.lat * n));

          a = 6378137 * a * 6378137 / 2;
        }

        return Math.abs(a);
      },
      formattedNumber: function (t, e) {
        var i = parseFloat(t).toFixed(e),
            o = L.drawLocal.format && L.drawLocal.format.numeric,
            a = o && o.delimiters,
            n = a && a.thousands,
            s = a && a.decimal;

        if (n || s) {
          var r = i.split(".");
          i = n ? r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + n) : r[0], s = s || ".", r.length > 1 && (i = i + s + r[1]);
        }

        return i;
      },
      readableArea: function (e, i, o) {
        var a,
            n,
            o = L.Util.extend({}, t, o);
        return i ? (n = ["ha", "m"], type = typeof i, "string" === type ? n = [i] : "boolean" !== type && (n = i), a = e >= 1e6 && -1 !== n.indexOf("km") ? L.GeometryUtil.formattedNumber(1e-6 * e, o.km) + " km²" : e >= 1e4 && -1 !== n.indexOf("ha") ? L.GeometryUtil.formattedNumber(1e-4 * e, o.ha) + " ha" : L.GeometryUtil.formattedNumber(e, o.m) + " m²") : (e /= .836127, a = e >= 3097600 ? L.GeometryUtil.formattedNumber(e / 3097600, o.mi) + " mi²" : e >= 4840 ? L.GeometryUtil.formattedNumber(e / 4840, o.ac) + " acres" : L.GeometryUtil.formattedNumber(e, o.yd) + " yd²"), a;
      },
      readableDistance: function (e, i, o, a, n) {
        var s,
            n = L.Util.extend({}, t, n);

        switch (i ? "string" == typeof i ? i : "metric" : o ? "feet" : a ? "nauticalMile" : "yards") {
          case "metric":
            s = e > 1e3 ? L.GeometryUtil.formattedNumber(e / 1e3, n.km) + " km" : L.GeometryUtil.formattedNumber(e, n.m) + " m";
            break;

          case "feet":
            e *= 3.28083, s = L.GeometryUtil.formattedNumber(e, n.ft) + " ft";
            break;

          case "nauticalMile":
            e *= .53996, s = L.GeometryUtil.formattedNumber(e / 1e3, n.nm) + " nm";
            break;

          case "yards":
          default:
            e *= 1.09361, s = e > 1760 ? L.GeometryUtil.formattedNumber(e / 1760, n.mi) + " miles" : L.GeometryUtil.formattedNumber(e, n.yd) + " yd";
        }

        return s;
      },
      isVersion07x: function () {
        var t = L.version.split(".");
        return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10);
      }
    });
  }(), L.Util.extend(L.LineUtil, {
    segmentsIntersect: function (t, e, i, o) {
      return this._checkCounterclockwise(t, i, o) !== this._checkCounterclockwise(e, i, o) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, o);
    },
    _checkCounterclockwise: function (t, e, i) {
      return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x);
    }
  }), L.Polyline.include({
    intersects: function () {
      var t,
          e,
          i,
          o = this._getProjectedPoints(),
          a = o ? o.length : 0;

      if (this._tooFewPointsForIntersection()) return !1;

      for (t = a - 1; t >= 3; t--) if (e = o[t - 1], i = o[t], this._lineSegmentsIntersectsRange(e, i, t - 2)) return !0;

      return !1;
    },
    newLatLngIntersects: function (t, e) {
      return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e);
    },
    newPointIntersects: function (t, e) {
      var i = this._getProjectedPoints(),
          o = i ? i.length : 0,
          a = i ? i[o - 1] : null,
          n = o - 2;

      return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(a, t, n, e ? 1 : 0);
    },
    _tooFewPointsForIntersection: function (t) {
      var e = this._getProjectedPoints(),
          i = e ? e.length : 0;

      return i += t || 0, !e || i <= 3;
    },
    _lineSegmentsIntersectsRange: function (t, e, i, o) {
      var a,
          n,
          s = this._getProjectedPoints();

      o = o || 0;

      for (var r = i; r > o; r--) if (a = s[r - 1], n = s[r], L.LineUtil.segmentsIntersect(t, e, a, n)) return !0;

      return !1;
    },
    _getProjectedPoints: function () {
      if (!this._defaultShape) return this._originalPoints;

      for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++) t.push(this._map.latLngToLayerPoint(e[i]));

      return t;
    }
  }), L.Polygon.include({
    intersects: function () {
      var t,
          e,
          i,
          o,
          a = this._getProjectedPoints();

      return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (t = a.length, e = a[0], i = a[t - 1], o = t - 2, this._lineSegmentsIntersectsRange(i, e, o, 1)));
    }
  }), L.Control.Draw = L.Control.extend({
    options: {
      position: "topleft",
      draw: {},
      edit: !1
    },
    initialize: function (t) {
      if (L.version < "0.7") throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
      L.Control.prototype.initialize.call(this, t);
      var e;
      this._toolbars = {}, L.DrawToolbar && this.options.draw && (e = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = e, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (e = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = e, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this;
    },
    onAdd: function (t) {
      var e,
          i = L.DomUtil.create("div", "leaflet-draw"),
          o = !1;

      for (var a in this._toolbars) this._toolbars.hasOwnProperty(a) && (e = this._toolbars[a].addToolbar(t)) && (o || (L.DomUtil.hasClass(e, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(e.childNodes[0], "leaflet-draw-toolbar-top"), o = !0), i.appendChild(e));

      return i;
    },
    onRemove: function () {
      for (var t in this._toolbars) this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar();
    },
    setDrawingOptions: function (t) {
      for (var e in this._toolbars) this._toolbars[e] instanceof L.DrawToolbar && this._toolbars[e].setOptions(t);
    },
    _toolbarEnabled: function (t) {
      var e = t.target;

      for (var i in this._toolbars) this._toolbars[i] !== e && this._toolbars[i].disable();
    }
  }), L.Map.mergeOptions({
    drawControlTooltips: !0,
    drawControl: !1
  }), L.Map.addInitHook(function () {
    this.options.drawControl && (this.drawControl = new L.Control.Draw(), this.addControl(this.drawControl));
  }), L.Toolbar = L.Class.extend({
    initialize: function (t) {
      L.setOptions(this, t), this._modes = {}, this._actionButtons = [], this._activeMode = null;
      var e = L.version.split(".");
      1 === parseInt(e[0], 10) && parseInt(e[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events);
    },
    enabled: function () {
      return null !== this._activeMode;
    },
    disable: function () {
      this.enabled() && this._activeMode.handler.disable();
    },
    addToolbar: function (t) {
      var e,
          i = L.DomUtil.create("div", "leaflet-draw-section"),
          o = 0,
          a = this._toolbarClass || "",
          n = this.getModeHandlers(t);

      for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = t, e = 0; e < n.length; e++) n[e].enabled && this._initModeHandler(n[e].handler, this._toolbarContainer, o++, a, n[e].title);

      if (o) return this._lastButtonIndex = --o, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), i.appendChild(this._toolbarContainer), i.appendChild(this._actionsContainer), i;
    },
    removeToolbar: function () {
      for (var t in this._modes) this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler), this._modes[t].handler.disable(), this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));

      this._modes = {};

      for (var e = 0, i = this._actionButtons.length; e < i; e++) this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);

      this._actionButtons = [], this._actionsContainer = null;
    },
    _initModeHandler: function (t, e, i, o, a) {
      var n = t.type;
      this._modes[n] = {}, this._modes[n].handler = t, this._modes[n].button = this._createButton({
        type: n,
        title: a,
        className: o + "-" + n,
        container: e,
        callback: this._modes[n].handler.enable,
        context: this._modes[n].handler
      }), this._modes[n].buttonIndex = i, this._modes[n].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this);
    },
    _detectIOS: function () {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream;
    },
    _createButton: function (t) {
      var e = L.DomUtil.create("a", t.className || "", t.container),
          i = L.DomUtil.create("span", "sr-only", t.container);
      e.href = "#", e.appendChild(i), t.title && (e.title = t.title, i.innerHTML = t.title), t.text && (e.innerHTML = t.text, i.innerHTML = t.text);
      var o = this._detectIOS() ? "touchstart" : "click";
      return L.DomEvent.on(e, "click", L.DomEvent.stopPropagation).on(e, "mousedown", L.DomEvent.stopPropagation).on(e, "dblclick", L.DomEvent.stopPropagation).on(e, "touchstart", L.DomEvent.stopPropagation).on(e, "click", L.DomEvent.preventDefault).on(e, o, t.callback, t.context), e;
    },
    _disposeButton: function (t, e) {
      var i = this._detectIOS() ? "touchstart" : "click";
      L.DomEvent.off(t, "click", L.DomEvent.stopPropagation).off(t, "mousedown", L.DomEvent.stopPropagation).off(t, "dblclick", L.DomEvent.stopPropagation).off(t, "touchstart", L.DomEvent.stopPropagation).off(t, "click", L.DomEvent.preventDefault).off(t, i, e);
    },
    _handlerActivated: function (t) {
      this.disable(), this._activeMode = this._modes[t.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable");
    },
    _handlerDeactivated: function () {
      this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable");
    },
    _createActions: function (t) {
      var e,
          i,
          o,
          a,
          n = this._actionsContainer,
          s = this.getActions(t),
          r = s.length;

      for (i = 0, o = this._actionButtons.length; i < o; i++) this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback);

      for (this._actionButtons = []; n.firstChild;) n.removeChild(n.firstChild);

      for (var l = 0; l < r; l++) "enabled" in s[l] && !s[l].enabled || (e = L.DomUtil.create("li", "", n), a = this._createButton({
        title: s[l].title,
        text: s[l].text,
        container: e,
        callback: s[l].callback,
        context: s[l].context
      }), this._actionButtons.push({
        button: a,
        callback: s[l].callback
      }));
    },
    _showActionsToolbar: function () {
      var t = this._activeMode.buttonIndex,
          e = this._lastButtonIndex,
          i = this._activeMode.button.offsetTop - 1;
      this._createActions(this._activeMode.handler), this._actionsContainer.style.top = i + "px", 0 === t && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), t === e && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block", this._map.fire(L.Draw.Event.TOOLBAROPENED);
    },
    _hideActionsToolbar: function () {
      this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"), this._map.fire(L.Draw.Event.TOOLBARCLOSED);
    }
  }), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({
    initialize: function (t) {
      this._map = t, this._popupPane = t._panes.popupPane, this._visible = !1, this._container = t.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this);
    },
    dispose: function () {
      this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null);
    },
    updateContent: function (t) {
      return this._container ? (t.subtext = t.subtext || "", 0 !== t.subtext.length || this._singleLineLabel ? t.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (t.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>", t.text || t.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this;
    },
    updatePosition: function (t) {
      var e = this._map.latLngToLayerPoint(t),
          i = this._container;

      return this._container && (this._visible && (i.style.visibility = "inherit"), L.DomUtil.setPosition(i, e)), this;
    },
    showAsError: function () {
      return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this;
    },
    removeError: function () {
      return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this;
    },
    _onMouseOut: function () {
      this._container && (this._container.style.visibility = "hidden");
    }
  }), L.DrawToolbar = L.Toolbar.extend({
    statics: {
      TYPE: "draw"
    },
    options: {
      polyline: {},
      polygon: {},
      rectangle: {},
      circle: {},
      marker: {},
      circlemarker: {}
    },
    initialize: function (t) {
      for (var e in this.options) this.options.hasOwnProperty(e) && t[e] && (t[e] = L.extend({}, this.options[e], t[e]));

      this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, t);
    },
    getModeHandlers: function (t) {
      return [{
        enabled: this.options.polyline,
        handler: new L.Draw.Polyline(t, this.options.polyline),
        title: L.drawLocal.draw.toolbar.buttons.polyline
      }, {
        enabled: this.options.polygon,
        handler: new L.Draw.Polygon(t, this.options.polygon),
        title: L.drawLocal.draw.toolbar.buttons.polygon
      }, {
        enabled: this.options.rectangle,
        handler: new L.Draw.Rectangle(t, this.options.rectangle),
        title: L.drawLocal.draw.toolbar.buttons.rectangle
      }, {
        enabled: this.options.circle,
        handler: new L.Draw.Circle(t, this.options.circle),
        title: L.drawLocal.draw.toolbar.buttons.circle
      }, {
        enabled: this.options.marker,
        handler: new L.Draw.Marker(t, this.options.marker),
        title: L.drawLocal.draw.toolbar.buttons.marker
      }, {
        enabled: this.options.circlemarker,
        handler: new L.Draw.CircleMarker(t, this.options.circlemarker),
        title: L.drawLocal.draw.toolbar.buttons.circlemarker
      }];
    },
    getActions: function (t) {
      return [{
        enabled: t.completeShape,
        title: L.drawLocal.draw.toolbar.finish.title,
        text: L.drawLocal.draw.toolbar.finish.text,
        callback: t.completeShape,
        context: t
      }, {
        enabled: t.deleteLastVertex,
        title: L.drawLocal.draw.toolbar.undo.title,
        text: L.drawLocal.draw.toolbar.undo.text,
        callback: t.deleteLastVertex,
        context: t
      }, {
        title: L.drawLocal.draw.toolbar.actions.title,
        text: L.drawLocal.draw.toolbar.actions.text,
        callback: this.disable,
        context: this
      }];
    },
    setOptions: function (t) {
      L.setOptions(this, t);

      for (var e in this._modes) this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e]);
    }
  }), L.EditToolbar = L.Toolbar.extend({
    statics: {
      TYPE: "edit"
    },
    options: {
      edit: {
        selectedPathOptions: {
          dashArray: "10, 10",
          fill: !0,
          fillColor: "#fe57a1",
          fillOpacity: .1,
          maintainColor: !1
        }
      },
      remove: {},
      poly: null,
      featureGroup: null
    },
    initialize: function (t) {
      t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions), t.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)), t.remove && (t.remove = L.extend({}, this.options.remove, t.remove)), t.poly && (t.poly = L.extend({}, this.options.poly, t.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, t), this._selectedFeatureCount = 0;
    },
    getModeHandlers: function (t) {
      var e = this.options.featureGroup;
      return [{
        enabled: this.options.edit,
        handler: new L.EditToolbar.Edit(t, {
          featureGroup: e,
          selectedPathOptions: this.options.edit.selectedPathOptions,
          poly: this.options.poly
        }),
        title: L.drawLocal.edit.toolbar.buttons.edit
      }, {
        enabled: this.options.remove,
        handler: new L.EditToolbar.Delete(t, {
          featureGroup: e
        }),
        title: L.drawLocal.edit.toolbar.buttons.remove
      }];
    },
    getActions: function (t) {
      var e = [{
        title: L.drawLocal.edit.toolbar.actions.save.title,
        text: L.drawLocal.edit.toolbar.actions.save.text,
        callback: this._save,
        context: this
      }, {
        title: L.drawLocal.edit.toolbar.actions.cancel.title,
        text: L.drawLocal.edit.toolbar.actions.cancel.text,
        callback: this.disable,
        context: this
      }];
      return t.removeAllLayers && e.push({
        title: L.drawLocal.edit.toolbar.actions.clearAll.title,
        text: L.drawLocal.edit.toolbar.actions.clearAll.text,
        callback: this._clearAllLayers,
        context: this
      }), e;
    },
    addToolbar: function (t) {
      var e = L.Toolbar.prototype.addToolbar.call(this, t);
      return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), e;
    },
    removeToolbar: function () {
      this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this);
    },
    disable: function () {
      this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this));
    },
    _save: function () {
      this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable();
    },
    _clearAllLayers: function () {
      this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable();
    },
    _checkDisabled: function () {
      var t,
          e = this.options.featureGroup,
          i = 0 !== e.getLayers().length;
      this.options.edit && (t = this._modes[L.EditToolbar.Edit.TYPE].button, i ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"), t.setAttribute("title", i ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)), this.options.remove && (t = this._modes[L.EditToolbar.Delete.TYPE].button, i ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"), t.setAttribute("title", i ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled));
    }
  }), L.EditToolbar.Edit = L.Handler.extend({
    statics: {
      TYPE: "edit"
    },
    initialize: function (t, e) {
      if (L.Handler.prototype.initialize.call(this, t), L.setOptions(this, e), this._featureGroup = e.featureGroup, !(this._featureGroup instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
      this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE;
      var i = L.version.split(".");
      1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events);
    },
    enable: function () {
      !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
        handler: this.type
      }), this._map.fire(L.Draw.Event.EDITSTART, {
        handler: this.type
      }), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this));
    },
    disable: function () {
      this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, {
        handler: this.type
      }), this.fire("disabled", {
        handler: this.type
      }));
    },
    addHooks: function () {
      var t = this._map;
      t && (t.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({
        text: L.drawLocal.edit.handlers.edit.tooltip.text,
        subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
      }), t._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
    },
    removeHooks: function () {
      this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
    },
    revertLayers: function () {
      this._featureGroup.eachLayer(function (t) {
        this._revertLayer(t);
      }, this);
    },
    save: function () {
      var t = new L.LayerGroup();
      this._featureGroup.eachLayer(function (e) {
        e.edited && (t.addLayer(e), e.edited = !1);
      }), this._map.fire(L.Draw.Event.EDITED, {
        layers: t
      });
    },
    _backupLayer: function (t) {
      var e = L.Util.stamp(t);
      this._uneditedLayerProps[e] || (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? this._uneditedLayerProps[e] = {
        latlngs: L.LatLngUtil.cloneLatLngs(t.getLatLngs())
      } : t instanceof L.Circle ? this._uneditedLayerProps[e] = {
        latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()),
        radius: t.getRadius()
      } : (t instanceof L.Marker || t instanceof L.CircleMarker) && (this._uneditedLayerProps[e] = {
        latlng: L.LatLngUtil.cloneLatLng(t.getLatLng())
      }));
    },
    _getTooltipText: function () {
      return {
        text: L.drawLocal.edit.handlers.edit.tooltip.text,
        subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
      };
    },
    _updateTooltip: function () {
      this._tooltip.updateContent(this._getTooltipText());
    },
    _revertLayer: function (t) {
      var e = L.Util.stamp(t);
      t.edited = !1, this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof L.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng), t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof L.Marker || t instanceof L.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng), t.fire("revert-edited", {
        layer: t
      }));
    },
    _enableLayerEdit: function (t) {
      var e,
          i,
          o = t.layer || t.target || t;
      this._backupLayer(o), this.options.poly && (i = L.Util.extend({}, this.options.poly), o.options.poly = i), this.options.selectedPathOptions && (e = L.Util.extend({}, this.options.selectedPathOptions), e.maintainColor && (e.color = o.options.color, e.fillColor = o.options.fillColor), o.options.original = L.extend({}, o.options), o.options.editing = e), o instanceof L.Marker ? (o.editing && o.editing.enable(), o.dragging.enable(), o.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : o.editing.enable();
    },
    _disableLayerEdit: function (t) {
      var e = t.layer || t.target || t;
      e.edited = !1, e.editing && e.editing.disable(), delete e.options.editing, delete e.options.original, this._selectedPathOptions && (e instanceof L.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions), delete e.options.previousOptions)), e instanceof L.Marker ? (e.dragging.disable(), e.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : e.editing.disable();
    },
    _onMouseMove: function (t) {
      this._tooltip.updatePosition(t.latlng);
    },
    _onMarkerDragEnd: function (t) {
      var e = t.target;
      e.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, {
        layer: e
      });
    },
    _onTouchMove: function (t) {
      var e = t.originalEvent.changedTouches[0],
          i = this._map.mouseEventToLayerPoint(e),
          o = this._map.layerPointToLatLng(i);

      t.target.setLatLng(o);
    },
    _hasAvailableLayers: function () {
      return 0 !== this._featureGroup.getLayers().length;
    }
  }), L.EditToolbar.Delete = L.Handler.extend({
    statics: {
      TYPE: "remove"
    },
    initialize: function (t, e) {
      if (L.Handler.prototype.initialize.call(this, t), L.Util.setOptions(this, e), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
      this.type = L.EditToolbar.Delete.TYPE;
      var i = L.version.split(".");
      1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events);
    },
    enable: function () {
      !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
        handler: this.type
      }), this._map.fire(L.Draw.Event.DELETESTART, {
        handler: this.type
      }), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this));
    },
    disable: function () {
      this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, {
        handler: this.type
      }), this.fire("disabled", {
        handler: this.type
      }));
    },
    addHooks: function () {
      var t = this._map;
      t && (t.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup(), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({
        text: L.drawLocal.edit.handlers.remove.tooltip.text
      }), this._map.on("mousemove", this._onMouseMove, this));
    },
    removeHooks: function () {
      this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this));
    },
    revertLayers: function () {
      this._deletedLayers.eachLayer(function (t) {
        this._deletableLayers.addLayer(t), t.fire("revert-deleted", {
          layer: t
        });
      }, this);
    },
    save: function () {
      this._map.fire(L.Draw.Event.DELETED, {
        layers: this._deletedLayers
      });
    },
    removeAllLayers: function () {
      this._deletableLayers.eachLayer(function (t) {
        this._removeLayer({
          layer: t
        });
      }, this), this.save();
    },
    _enableLayerDelete: function (t) {
      (t.layer || t.target || t).on("click", this._removeLayer, this);
    },
    _disableLayerDelete: function (t) {
      var e = t.layer || t.target || t;
      e.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(e);
    },
    _removeLayer: function (t) {
      var e = t.layer || t.target || t;
      this._deletableLayers.removeLayer(e), this._deletedLayers.addLayer(e), e.fire("deleted");
    },
    _onMouseMove: function (t) {
      this._tooltip.updatePosition(t.latlng);
    },
    _hasAvailableLayers: function () {
      return 0 !== this._deletableLayers.getLayers().length;
    }
  });
}(window, document);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35sZWFmbGV0LWRyYXcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGVhZmxldC1kcmF3L2Rpc3QvbGVhZmxldC5kcmF3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGVhZmxldC5kcmF3IDEuMC40LCBhIHBsdWdpbiB0aGF0IGFkZHMgZHJhd2luZyBhbmQgZWRpdGluZyB0b29scyB0byBMZWFmbGV0IHBvd2VyZWQgbWFwcy5cbiAoYykgMjAxMi0yMDE3LCBKYWNvYiBUb3llLCBKb24gV2VzdCwgU21hcnRyYWssIExlYWZsZXRcblxuIGh0dHBzOi8vZ2l0aHViLmNvbS9MZWFmbGV0L0xlYWZsZXQuZHJhd1xuIGh0dHA6Ly9sZWFmbGV0anMuY29tXG4gKi9cbiFmdW5jdGlvbih0LGUsaSl7ZnVuY3Rpb24gbyh0LGUpe2Zvcig7KHQ9dC5wYXJlbnRFbGVtZW50KSYmIXQuY2xhc3NMaXN0LmNvbnRhaW5zKGUpOyk7cmV0dXJuIHR9TC5kcmF3VmVyc2lvbj1cIjEuMC40XCIsTC5EcmF3PXt9LEwuZHJhd0xvY2FsPXtkcmF3Ont0b29sYmFyOnthY3Rpb25zOnt0aXRsZTpcIkNhbmNlbCBkcmF3aW5nXCIsdGV4dDpcIkNhbmNlbFwifSxmaW5pc2g6e3RpdGxlOlwiRmluaXNoIGRyYXdpbmdcIix0ZXh0OlwiRmluaXNoXCJ9LHVuZG86e3RpdGxlOlwiRGVsZXRlIGxhc3QgcG9pbnQgZHJhd25cIix0ZXh0OlwiRGVsZXRlIGxhc3QgcG9pbnRcIn0sYnV0dG9uczp7cG9seWxpbmU6XCJEcmF3IGEgcG9seWxpbmVcIixwb2x5Z29uOlwiRHJhdyBhIHBvbHlnb25cIixyZWN0YW5nbGU6XCJEcmF3IGEgcmVjdGFuZ2xlXCIsY2lyY2xlOlwiRHJhdyBhIGNpcmNsZVwiLG1hcmtlcjpcIkRyYXcgYSBtYXJrZXJcIixjaXJjbGVtYXJrZXI6XCJEcmF3IGEgY2lyY2xlbWFya2VyXCJ9fSxoYW5kbGVyczp7Y2lyY2xlOnt0b29sdGlwOntzdGFydDpcIkNsaWNrIGFuZCBkcmFnIHRvIGRyYXcgY2lyY2xlLlwifSxyYWRpdXM6XCJSYWRpdXNcIn0sY2lyY2xlbWFya2VyOnt0b29sdGlwOntzdGFydDpcIkNsaWNrIG1hcCB0byBwbGFjZSBjaXJjbGUgbWFya2VyLlwifX0sbWFya2VyOnt0b29sdGlwOntzdGFydDpcIkNsaWNrIG1hcCB0byBwbGFjZSBtYXJrZXIuXCJ9fSxwb2x5Z29uOnt0b29sdGlwOntzdGFydDpcIkNsaWNrIHRvIHN0YXJ0IGRyYXdpbmcgc2hhcGUuXCIsY29udDpcIkNsaWNrIHRvIGNvbnRpbnVlIGRyYXdpbmcgc2hhcGUuXCIsZW5kOlwiQ2xpY2sgZmlyc3QgcG9pbnQgdG8gY2xvc2UgdGhpcyBzaGFwZS5cIn19LHBvbHlsaW5lOntlcnJvcjpcIjxzdHJvbmc+RXJyb3I6PC9zdHJvbmc+IHNoYXBlIGVkZ2VzIGNhbm5vdCBjcm9zcyFcIix0b29sdGlwOntzdGFydDpcIkNsaWNrIHRvIHN0YXJ0IGRyYXdpbmcgbGluZS5cIixjb250OlwiQ2xpY2sgdG8gY29udGludWUgZHJhd2luZyBsaW5lLlwiLGVuZDpcIkNsaWNrIGxhc3QgcG9pbnQgdG8gZmluaXNoIGxpbmUuXCJ9fSxyZWN0YW5nbGU6e3Rvb2x0aXA6e3N0YXJ0OlwiQ2xpY2sgYW5kIGRyYWcgdG8gZHJhdyByZWN0YW5nbGUuXCJ9fSxzaW1wbGVzaGFwZTp7dG9vbHRpcDp7ZW5kOlwiUmVsZWFzZSBtb3VzZSB0byBmaW5pc2ggZHJhd2luZy5cIn19fX0sZWRpdDp7dG9vbGJhcjp7YWN0aW9uczp7c2F2ZTp7dGl0bGU6XCJTYXZlIGNoYW5nZXNcIix0ZXh0OlwiU2F2ZVwifSxjYW5jZWw6e3RpdGxlOlwiQ2FuY2VsIGVkaXRpbmcsIGRpc2NhcmRzIGFsbCBjaGFuZ2VzXCIsdGV4dDpcIkNhbmNlbFwifSxjbGVhckFsbDp7dGl0bGU6XCJDbGVhciBhbGwgbGF5ZXJzXCIsdGV4dDpcIkNsZWFyIEFsbFwifX0sYnV0dG9uczp7ZWRpdDpcIkVkaXQgbGF5ZXJzXCIsZWRpdERpc2FibGVkOlwiTm8gbGF5ZXJzIHRvIGVkaXRcIixyZW1vdmU6XCJEZWxldGUgbGF5ZXJzXCIscmVtb3ZlRGlzYWJsZWQ6XCJObyBsYXllcnMgdG8gZGVsZXRlXCJ9fSxoYW5kbGVyczp7ZWRpdDp7dG9vbHRpcDp7dGV4dDpcIkRyYWcgaGFuZGxlcyBvciBtYXJrZXJzIHRvIGVkaXQgZmVhdHVyZXMuXCIsc3VidGV4dDpcIkNsaWNrIGNhbmNlbCB0byB1bmRvIGNoYW5nZXMuXCJ9fSxyZW1vdmU6e3Rvb2x0aXA6e3RleHQ6XCJDbGljayBvbiBhIGZlYXR1cmUgdG8gcmVtb3ZlLlwifX19fX0sTC5EcmF3LkV2ZW50PXt9LEwuRHJhdy5FdmVudC5DUkVBVEVEPVwiZHJhdzpjcmVhdGVkXCIsTC5EcmF3LkV2ZW50LkVESVRFRD1cImRyYXc6ZWRpdGVkXCIsTC5EcmF3LkV2ZW50LkRFTEVURUQ9XCJkcmF3OmRlbGV0ZWRcIixMLkRyYXcuRXZlbnQuRFJBV1NUQVJUPVwiZHJhdzpkcmF3c3RhcnRcIixMLkRyYXcuRXZlbnQuRFJBV1NUT1A9XCJkcmF3OmRyYXdzdG9wXCIsTC5EcmF3LkV2ZW50LkRSQVdWRVJURVg9XCJkcmF3OmRyYXd2ZXJ0ZXhcIixMLkRyYXcuRXZlbnQuRURJVFNUQVJUPVwiZHJhdzplZGl0c3RhcnRcIixMLkRyYXcuRXZlbnQuRURJVE1PVkU9XCJkcmF3OmVkaXRtb3ZlXCIsTC5EcmF3LkV2ZW50LkVESVRSRVNJWkU9XCJkcmF3OmVkaXRyZXNpemVcIixMLkRyYXcuRXZlbnQuRURJVFZFUlRFWD1cImRyYXc6ZWRpdHZlcnRleFwiLEwuRHJhdy5FdmVudC5FRElUU1RPUD1cImRyYXc6ZWRpdHN0b3BcIixMLkRyYXcuRXZlbnQuREVMRVRFU1RBUlQ9XCJkcmF3OmRlbGV0ZXN0YXJ0XCIsTC5EcmF3LkV2ZW50LkRFTEVURVNUT1A9XCJkcmF3OmRlbGV0ZXN0b3BcIixMLkRyYXcuRXZlbnQuVE9PTEJBUk9QRU5FRD1cImRyYXc6dG9vbGJhcm9wZW5lZFwiLEwuRHJhdy5FdmVudC5UT09MQkFSQ0xPU0VEPVwiZHJhdzp0b29sYmFyY2xvc2VkXCIsTC5EcmF3LkV2ZW50Lk1BUktFUkNPTlRFWFQ9XCJkcmF3Om1hcmtlcmNvbnRleHRcIixMLkRyYXc9TC5EcmF3fHx7fSxMLkRyYXcuRmVhdHVyZT1MLkhhbmRsZXIuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKHQsZSl7dGhpcy5fbWFwPXQsdGhpcy5fY29udGFpbmVyPXQuX2NvbnRhaW5lcix0aGlzLl9vdmVybGF5UGFuZT10Ll9wYW5lcy5vdmVybGF5UGFuZSx0aGlzLl9wb3B1cFBhbmU9dC5fcGFuZXMucG9wdXBQYW5lLGUmJmUuc2hhcGVPcHRpb25zJiYoZS5zaGFwZU9wdGlvbnM9TC5VdGlsLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMuc2hhcGVPcHRpb25zLGUuc2hhcGVPcHRpb25zKSksTC5zZXRPcHRpb25zKHRoaXMsZSk7dmFyIGk9TC52ZXJzaW9uLnNwbGl0KFwiLlwiKTsxPT09cGFyc2VJbnQoaVswXSwxMCkmJnBhcnNlSW50KGlbMV0sMTApPj0yP0wuRHJhdy5GZWF0dXJlLmluY2x1ZGUoTC5FdmVudGVkLnByb3RvdHlwZSk6TC5EcmF3LkZlYXR1cmUuaW5jbHVkZShMLk1peGluLkV2ZW50cyl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuX2VuYWJsZWR8fChMLkhhbmRsZXIucHJvdG90eXBlLmVuYWJsZS5jYWxsKHRoaXMpLHRoaXMuZmlyZShcImVuYWJsZWRcIix7aGFuZGxlcjp0aGlzLnR5cGV9KSx0aGlzLl9tYXAuZmlyZShMLkRyYXcuRXZlbnQuRFJBV1NUQVJULHtsYXllclR5cGU6dGhpcy50eXBlfSkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5fZW5hYmxlZCYmKEwuSGFuZGxlci5wcm90b3R5cGUuZGlzYWJsZS5jYWxsKHRoaXMpLHRoaXMuX21hcC5maXJlKEwuRHJhdy5FdmVudC5EUkFXU1RPUCx7bGF5ZXJUeXBlOnRoaXMudHlwZX0pLHRoaXMuZmlyZShcImRpc2FibGVkXCIse2hhbmRsZXI6dGhpcy50eXBlfSkpfSxhZGRIb29rczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX21hcDt0JiYoTC5Eb21VdGlsLmRpc2FibGVUZXh0U2VsZWN0aW9uKCksdC5nZXRDb250YWluZXIoKS5mb2N1cygpLHRoaXMuX3Rvb2x0aXA9bmV3IEwuRHJhdy5Ub29sdGlwKHRoaXMuX21hcCksTC5Eb21FdmVudC5vbih0aGlzLl9jb250YWluZXIsXCJrZXl1cFwiLHRoaXMuX2NhbmNlbERyYXdpbmcsdGhpcykpfSxyZW1vdmVIb29rczpmdW5jdGlvbigpe3RoaXMuX21hcCYmKEwuRG9tVXRpbC5lbmFibGVUZXh0U2VsZWN0aW9uKCksdGhpcy5fdG9vbHRpcC5kaXNwb3NlKCksdGhpcy5fdG9vbHRpcD1udWxsLEwuRG9tRXZlbnQub2ZmKHRoaXMuX2NvbnRhaW5lcixcImtleXVwXCIsdGhpcy5fY2FuY2VsRHJhd2luZyx0aGlzKSl9LHNldE9wdGlvbnM6ZnVuY3Rpb24odCl7TC5zZXRPcHRpb25zKHRoaXMsdCl9LF9maXJlQ3JlYXRlZEV2ZW50OmZ1bmN0aW9uKHQpe3RoaXMuX21hcC5maXJlKEwuRHJhdy5FdmVudC5DUkVBVEVELHtsYXllcjp0LGxheWVyVHlwZTp0aGlzLnR5cGV9KX0sX2NhbmNlbERyYXdpbmc6ZnVuY3Rpb24odCl7Mjc9PT10LmtleUNvZGUmJih0aGlzLl9tYXAuZmlyZShcImRyYXc6Y2FuY2VsZWRcIix7bGF5ZXJUeXBlOnRoaXMudHlwZX0pLHRoaXMuZGlzYWJsZSgpKX19KSxMLkRyYXcuUG9seWxpbmU9TC5EcmF3LkZlYXR1cmUuZXh0ZW5kKHtzdGF0aWNzOntUWVBFOlwicG9seWxpbmVcIn0sUG9seTpMLlBvbHlsaW5lLG9wdGlvbnM6e2FsbG93SW50ZXJzZWN0aW9uOiEwLHJlcGVhdE1vZGU6ITEsZHJhd0Vycm9yOntjb2xvcjpcIiNiMDBiMDBcIix0aW1lb3V0OjI1MDB9LGljb246bmV3IEwuRGl2SWNvbih7aWNvblNpemU6bmV3IEwuUG9pbnQoOCw4KSxjbGFzc05hbWU6XCJsZWFmbGV0LWRpdi1pY29uIGxlYWZsZXQtZWRpdGluZy1pY29uXCJ9KSx0b3VjaEljb246bmV3IEwuRGl2SWNvbih7aWNvblNpemU6bmV3IEwuUG9pbnQoMjAsMjApLGNsYXNzTmFtZTpcImxlYWZsZXQtZGl2LWljb24gbGVhZmxldC1lZGl0aW5nLWljb24gbGVhZmxldC10b3VjaC1pY29uXCJ9KSxndWlkZWxpbmVEaXN0YW5jZToyMCxtYXhHdWlkZUxpbmVMZW5ndGg6NGUzLHNoYXBlT3B0aW9uczp7c3Ryb2tlOiEwLGNvbG9yOlwiIzMzODhmZlwiLHdlaWdodDo0LG9wYWNpdHk6LjUsZmlsbDohMSxjbGlja2FibGU6ITB9LG1ldHJpYzohMCxmZWV0OiEwLG5hdXRpYzohMSxzaG93TGVuZ3RoOiEwLHpJbmRleE9mZnNldDoyZTMsZmFjdG9yOjEsbWF4UG9pbnRzOjB9LGluaXRpYWxpemU6ZnVuY3Rpb24odCxlKXtMLkJyb3dzZXIudG91Y2gmJih0aGlzLm9wdGlvbnMuaWNvbj10aGlzLm9wdGlvbnMudG91Y2hJY29uKSx0aGlzLm9wdGlvbnMuZHJhd0Vycm9yLm1lc3NhZ2U9TC5kcmF3TG9jYWwuZHJhdy5oYW5kbGVycy5wb2x5bGluZS5lcnJvcixlJiZlLmRyYXdFcnJvciYmKGUuZHJhd0Vycm9yPUwuVXRpbC5leHRlbmQoe30sdGhpcy5vcHRpb25zLmRyYXdFcnJvcixlLmRyYXdFcnJvcikpLHRoaXMudHlwZT1MLkRyYXcuUG9seWxpbmUuVFlQRSxMLkRyYXcuRmVhdHVyZS5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsdCxlKX0sYWRkSG9va3M6ZnVuY3Rpb24oKXtMLkRyYXcuRmVhdHVyZS5wcm90b3R5cGUuYWRkSG9va3MuY2FsbCh0aGlzKSx0aGlzLl9tYXAmJih0aGlzLl9tYXJrZXJzPVtdLHRoaXMuX21hcmtlckdyb3VwPW5ldyBMLkxheWVyR3JvdXAsdGhpcy5fbWFwLmFkZExheWVyKHRoaXMuX21hcmtlckdyb3VwKSx0aGlzLl9wb2x5PW5ldyBMLlBvbHlsaW5lKFtdLHRoaXMub3B0aW9ucy5zaGFwZU9wdGlvbnMpLHRoaXMuX3Rvb2x0aXAudXBkYXRlQ29udGVudCh0aGlzLl9nZXRUb29sdGlwVGV4dCgpKSx0aGlzLl9tb3VzZU1hcmtlcnx8KHRoaXMuX21vdXNlTWFya2VyPUwubWFya2VyKHRoaXMuX21hcC5nZXRDZW50ZXIoKSx7aWNvbjpMLmRpdkljb24oe2NsYXNzTmFtZTpcImxlYWZsZXQtbW91c2UtbWFya2VyXCIsaWNvbkFuY2hvcjpbMjAsMjBdLGljb25TaXplOls0MCw0MF19KSxvcGFjaXR5OjAsekluZGV4T2Zmc2V0OnRoaXMub3B0aW9ucy56SW5kZXhPZmZzZXR9KSksdGhpcy5fbW91c2VNYXJrZXIub24oXCJtb3VzZW91dFwiLHRoaXMuX29uTW91c2VPdXQsdGhpcykub24oXCJtb3VzZW1vdmVcIix0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKS5vbihcIm1vdXNlZG93blwiLHRoaXMuX29uTW91c2VEb3duLHRoaXMpLm9uKFwibW91c2V1cFwiLHRoaXMuX29uTW91c2VVcCx0aGlzKS5hZGRUbyh0aGlzLl9tYXApLHRoaXMuX21hcC5vbihcIm1vdXNldXBcIix0aGlzLl9vbk1vdXNlVXAsdGhpcykub24oXCJtb3VzZW1vdmVcIix0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKS5vbihcInpvb21sZXZlbHNjaGFuZ2VcIix0aGlzLl9vblpvb21FbmQsdGhpcykub24oXCJ0b3VjaHN0YXJ0XCIsdGhpcy5fb25Ub3VjaCx0aGlzKS5vbihcInpvb21lbmRcIix0aGlzLl9vblpvb21FbmQsdGhpcykpfSxyZW1vdmVIb29rczpmdW5jdGlvbigpe0wuRHJhdy5GZWF0dXJlLnByb3RvdHlwZS5yZW1vdmVIb29rcy5jYWxsKHRoaXMpLHRoaXMuX2NsZWFySGlkZUVycm9yVGltZW91dCgpLHRoaXMuX2NsZWFuVXBTaGFwZSgpLHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLl9tYXJrZXJHcm91cCksZGVsZXRlIHRoaXMuX21hcmtlckdyb3VwLGRlbGV0ZSB0aGlzLl9tYXJrZXJzLHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLl9wb2x5KSxkZWxldGUgdGhpcy5fcG9seSx0aGlzLl9tb3VzZU1hcmtlci5vZmYoXCJtb3VzZWRvd25cIix0aGlzLl9vbk1vdXNlRG93bix0aGlzKS5vZmYoXCJtb3VzZW91dFwiLHRoaXMuX29uTW91c2VPdXQsdGhpcykub2ZmKFwibW91c2V1cFwiLHRoaXMuX29uTW91c2VVcCx0aGlzKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSx0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5fbW91c2VNYXJrZXIpLGRlbGV0ZSB0aGlzLl9tb3VzZU1hcmtlcix0aGlzLl9jbGVhckd1aWRlcygpLHRoaXMuX21hcC5vZmYoXCJtb3VzZXVwXCIsdGhpcy5fb25Nb3VzZVVwLHRoaXMpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpLm9mZihcInpvb21sZXZlbHNjaGFuZ2VcIix0aGlzLl9vblpvb21FbmQsdGhpcykub2ZmKFwiem9vbWVuZFwiLHRoaXMuX29uWm9vbUVuZCx0aGlzKS5vZmYoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5fb25Ub3VjaCx0aGlzKS5vZmYoXCJjbGlja1wiLHRoaXMuX29uVG91Y2gsdGhpcyl9LGRlbGV0ZUxhc3RWZXJ0ZXg6ZnVuY3Rpb24oKXtpZighKHRoaXMuX21hcmtlcnMubGVuZ3RoPD0xKSl7dmFyIHQ9dGhpcy5fbWFya2Vycy5wb3AoKSxlPXRoaXMuX3BvbHksaT1lLmdldExhdExuZ3MoKSxvPWkuc3BsaWNlKC0xLDEpWzBdO3RoaXMuX3BvbHkuc2V0TGF0TG5ncyhpKSx0aGlzLl9tYXJrZXJHcm91cC5yZW1vdmVMYXllcih0KSxlLmdldExhdExuZ3MoKS5sZW5ndGg8MiYmdGhpcy5fbWFwLnJlbW92ZUxheWVyKGUpLHRoaXMuX3ZlcnRleENoYW5nZWQobywhMSl9fSxhZGRWZXJ0ZXg6ZnVuY3Rpb24odCl7aWYodGhpcy5fbWFya2Vycy5sZW5ndGg+PTImJiF0aGlzLm9wdGlvbnMuYWxsb3dJbnRlcnNlY3Rpb24mJnRoaXMuX3BvbHkubmV3TGF0TG5nSW50ZXJzZWN0cyh0KSlyZXR1cm4gdm9pZCB0aGlzLl9zaG93RXJyb3JUb29sdGlwKCk7dGhpcy5fZXJyb3JTaG93biYmdGhpcy5faGlkZUVycm9yVG9vbHRpcCgpLHRoaXMuX21hcmtlcnMucHVzaCh0aGlzLl9jcmVhdGVNYXJrZXIodCkpLHRoaXMuX3BvbHkuYWRkTGF0TG5nKHQpLDI9PT10aGlzLl9wb2x5LmdldExhdExuZ3MoKS5sZW5ndGgmJnRoaXMuX21hcC5hZGRMYXllcih0aGlzLl9wb2x5KSx0aGlzLl92ZXJ0ZXhDaGFuZ2VkKHQsITApfSxjb21wbGV0ZVNoYXBlOmZ1bmN0aW9uKCl7dGhpcy5fbWFya2Vycy5sZW5ndGg8PTF8fCF0aGlzLl9zaGFwZUlzVmFsaWQoKXx8KHRoaXMuX2ZpcmVDcmVhdGVkRXZlbnQoKSx0aGlzLmRpc2FibGUoKSx0aGlzLm9wdGlvbnMucmVwZWF0TW9kZSYmdGhpcy5lbmFibGUoKSl9LF9maW5pc2hTaGFwZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3BvbHkuX2RlZmF1bHRTaGFwZT90aGlzLl9wb2x5Ll9kZWZhdWx0U2hhcGUoKTp0aGlzLl9wb2x5LmdldExhdExuZ3MoKSxlPXRoaXMuX3BvbHkubmV3TGF0TG5nSW50ZXJzZWN0cyh0W3QubGVuZ3RoLTFdKTtpZighdGhpcy5vcHRpb25zLmFsbG93SW50ZXJzZWN0aW9uJiZlfHwhdGhpcy5fc2hhcGVJc1ZhbGlkKCkpcmV0dXJuIHZvaWQgdGhpcy5fc2hvd0Vycm9yVG9vbHRpcCgpO3RoaXMuX2ZpcmVDcmVhdGVkRXZlbnQoKSx0aGlzLmRpc2FibGUoKSx0aGlzLm9wdGlvbnMucmVwZWF0TW9kZSYmdGhpcy5lbmFibGUoKX0sX3NoYXBlSXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiEwfSxfb25ab29tRW5kOmZ1bmN0aW9uKCl7bnVsbCE9PXRoaXMuX21hcmtlcnMmJnRoaXMuX3VwZGF0ZUd1aWRlKCl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9tYXAubW91c2VFdmVudFRvTGF5ZXJQb2ludCh0Lm9yaWdpbmFsRXZlbnQpLGk9dGhpcy5fbWFwLmxheWVyUG9pbnRUb0xhdExuZyhlKTt0aGlzLl9jdXJyZW50TGF0TG5nPWksdGhpcy5fdXBkYXRlVG9vbHRpcChpKSx0aGlzLl91cGRhdGVHdWlkZShlKSx0aGlzLl9tb3VzZU1hcmtlci5zZXRMYXRMbmcoaSksTC5Eb21FdmVudC5wcmV2ZW50RGVmYXVsdCh0Lm9yaWdpbmFsRXZlbnQpfSxfdmVydGV4Q2hhbmdlZDpmdW5jdGlvbih0LGUpe3RoaXMuX21hcC5maXJlKEwuRHJhdy5FdmVudC5EUkFXVkVSVEVYLHtsYXllcnM6dGhpcy5fbWFya2VyR3JvdXB9KSx0aGlzLl91cGRhdGVGaW5pc2hIYW5kbGVyKCksdGhpcy5fdXBkYXRlUnVubmluZ01lYXN1cmUodCxlKSx0aGlzLl9jbGVhckd1aWRlcygpLHRoaXMuX3VwZGF0ZVRvb2x0aXAoKX0sX29uTW91c2VEb3duOmZ1bmN0aW9uKHQpe2lmKCF0aGlzLl9jbGlja0hhbmRsZWQmJiF0aGlzLl90b3VjaEhhbmRsZWQmJiF0aGlzLl9kaXNhYmxlTWFya2Vycyl7dGhpcy5fb25Nb3VzZU1vdmUodCksdGhpcy5fY2xpY2tIYW5kbGVkPSEwLHRoaXMuX2Rpc2FibGVOZXdNYXJrZXJzKCk7dmFyIGU9dC5vcmlnaW5hbEV2ZW50LGk9ZS5jbGllbnRYLG89ZS5jbGllbnRZO3RoaXMuX3N0YXJ0UG9pbnQuY2FsbCh0aGlzLGksbyl9fSxfc3RhcnRQb2ludDpmdW5jdGlvbih0LGUpe3RoaXMuX21vdXNlRG93bk9yaWdpbj1MLnBvaW50KHQsZSl9LF9vbk1vdXNlVXA6ZnVuY3Rpb24odCl7dmFyIGU9dC5vcmlnaW5hbEV2ZW50LGk9ZS5jbGllbnRYLG89ZS5jbGllbnRZO3RoaXMuX2VuZFBvaW50LmNhbGwodGhpcyxpLG8sdCksdGhpcy5fY2xpY2tIYW5kbGVkPW51bGx9LF9lbmRQb2ludDpmdW5jdGlvbihlLGksbyl7aWYodGhpcy5fbW91c2VEb3duT3JpZ2luKXt2YXIgYT1MLnBvaW50KGUsaSkuZGlzdGFuY2VUbyh0aGlzLl9tb3VzZURvd25PcmlnaW4pLG49dGhpcy5fY2FsY3VsYXRlRmluaXNoRGlzdGFuY2Uoby5sYXRsbmcpO3RoaXMub3B0aW9ucy5tYXhQb2ludHM+MSYmdGhpcy5vcHRpb25zLm1heFBvaW50cz09dGhpcy5fbWFya2Vycy5sZW5ndGgrMT8odGhpcy5hZGRWZXJ0ZXgoby5sYXRsbmcpLHRoaXMuX2ZpbmlzaFNoYXBlKCkpOm48MTAmJkwuQnJvd3Nlci50b3VjaD90aGlzLl9maW5pc2hTaGFwZSgpOk1hdGguYWJzKGEpPDkqKHQuZGV2aWNlUGl4ZWxSYXRpb3x8MSkmJnRoaXMuYWRkVmVydGV4KG8ubGF0bG5nKSx0aGlzLl9lbmFibGVOZXdNYXJrZXJzKCl9dGhpcy5fbW91c2VEb3duT3JpZ2luPW51bGx9LF9vblRvdWNoOmZ1bmN0aW9uKHQpe3ZhciBlLGksbz10Lm9yaWdpbmFsRXZlbnQ7IW8udG91Y2hlc3x8IW8udG91Y2hlc1swXXx8dGhpcy5fY2xpY2tIYW5kbGVkfHx0aGlzLl90b3VjaEhhbmRsZWR8fHRoaXMuX2Rpc2FibGVNYXJrZXJzfHwoZT1vLnRvdWNoZXNbMF0uY2xpZW50WCxpPW8udG91Y2hlc1swXS5jbGllbnRZLHRoaXMuX2Rpc2FibGVOZXdNYXJrZXJzKCksdGhpcy5fdG91Y2hIYW5kbGVkPSEwLHRoaXMuX3N0YXJ0UG9pbnQuY2FsbCh0aGlzLGUsaSksdGhpcy5fZW5kUG9pbnQuY2FsbCh0aGlzLGUsaSx0KSx0aGlzLl90b3VjaEhhbmRsZWQ9bnVsbCksdGhpcy5fY2xpY2tIYW5kbGVkPW51bGx9LF9vbk1vdXNlT3V0OmZ1bmN0aW9uKCl7dGhpcy5fdG9vbHRpcCYmdGhpcy5fdG9vbHRpcC5fb25Nb3VzZU91dC5jYWxsKHRoaXMuX3Rvb2x0aXApfSxfY2FsY3VsYXRlRmluaXNoRGlzdGFuY2U6ZnVuY3Rpb24odCl7dmFyIGU7aWYodGhpcy5fbWFya2Vycy5sZW5ndGg+MCl7dmFyIGk7aWYodGhpcy50eXBlPT09TC5EcmF3LlBvbHlsaW5lLlRZUEUpaT10aGlzLl9tYXJrZXJzW3RoaXMuX21hcmtlcnMubGVuZ3RoLTFdO2Vsc2V7aWYodGhpcy50eXBlIT09TC5EcmF3LlBvbHlnb24uVFlQRSlyZXR1cm4gMS8wO2k9dGhpcy5fbWFya2Vyc1swXX12YXIgbz10aGlzLl9tYXAubGF0TG5nVG9Db250YWluZXJQb2ludChpLmdldExhdExuZygpKSxhPW5ldyBMLk1hcmtlcih0LHtpY29uOnRoaXMub3B0aW9ucy5pY29uLHpJbmRleE9mZnNldDoyKnRoaXMub3B0aW9ucy56SW5kZXhPZmZzZXR9KSxuPXRoaXMuX21hcC5sYXRMbmdUb0NvbnRhaW5lclBvaW50KGEuZ2V0TGF0TG5nKCkpO2U9by5kaXN0YW5jZVRvKG4pfWVsc2UgZT0xLzA7cmV0dXJuIGV9LF91cGRhdGVGaW5pc2hIYW5kbGVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fbWFya2Vycy5sZW5ndGg7dD4xJiZ0aGlzLl9tYXJrZXJzW3QtMV0ub24oXCJjbGlja1wiLHRoaXMuX2ZpbmlzaFNoYXBlLHRoaXMpLHQ+MiYmdGhpcy5fbWFya2Vyc1t0LTJdLm9mZihcImNsaWNrXCIsdGhpcy5fZmluaXNoU2hhcGUsdGhpcyl9LF9jcmVhdGVNYXJrZXI6ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEwuTWFya2VyKHQse2ljb246dGhpcy5vcHRpb25zLmljb24sekluZGV4T2Zmc2V0OjIqdGhpcy5vcHRpb25zLnpJbmRleE9mZnNldH0pO3JldHVybiB0aGlzLl9tYXJrZXJHcm91cC5hZGRMYXllcihlKSxlfSxfdXBkYXRlR3VpZGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fbWFya2Vycz90aGlzLl9tYXJrZXJzLmxlbmd0aDowO2U+MCYmKHQ9dHx8dGhpcy5fbWFwLmxhdExuZ1RvTGF5ZXJQb2ludCh0aGlzLl9jdXJyZW50TGF0TG5nKSx0aGlzLl9jbGVhckd1aWRlcygpLHRoaXMuX2RyYXdHdWlkZSh0aGlzLl9tYXAubGF0TG5nVG9MYXllclBvaW50KHRoaXMuX21hcmtlcnNbZS0xXS5nZXRMYXRMbmcoKSksdCkpfSxfdXBkYXRlVG9vbHRpcDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9nZXRUb29sdGlwVGV4dCgpO3QmJnRoaXMuX3Rvb2x0aXAudXBkYXRlUG9zaXRpb24odCksdGhpcy5fZXJyb3JTaG93bnx8dGhpcy5fdG9vbHRpcC51cGRhdGVDb250ZW50KGUpfSxfZHJhd0d1aWRlOmZ1bmN0aW9uKHQsZSl7dmFyIGksbyxhLG49TWF0aC5mbG9vcihNYXRoLnNxcnQoTWF0aC5wb3coZS54LXQueCwyKStNYXRoLnBvdyhlLnktdC55LDIpKSkscz10aGlzLm9wdGlvbnMuZ3VpZGVsaW5lRGlzdGFuY2Uscj10aGlzLm9wdGlvbnMubWF4R3VpZGVMaW5lTGVuZ3RoLGw9bj5yP24tcjpzO2Zvcih0aGlzLl9ndWlkZXNDb250YWluZXJ8fCh0aGlzLl9ndWlkZXNDb250YWluZXI9TC5Eb21VdGlsLmNyZWF0ZShcImRpdlwiLFwibGVhZmxldC1kcmF3LWd1aWRlc1wiLHRoaXMuX292ZXJsYXlQYW5lKSk7bDxuO2wrPXRoaXMub3B0aW9ucy5ndWlkZWxpbmVEaXN0YW5jZSlpPWwvbixvPXt4Ok1hdGguZmxvb3IodC54KigxLWkpK2kqZS54KSx5Ok1hdGguZmxvb3IodC55KigxLWkpK2kqZS55KX0sYT1MLkRvbVV0aWwuY3JlYXRlKFwiZGl2XCIsXCJsZWFmbGV0LWRyYXctZ3VpZGUtZGFzaFwiLHRoaXMuX2d1aWRlc0NvbnRhaW5lciksYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9dGhpcy5fZXJyb3JTaG93bj90aGlzLm9wdGlvbnMuZHJhd0Vycm9yLmNvbG9yOnRoaXMub3B0aW9ucy5zaGFwZU9wdGlvbnMuY29sb3IsTC5Eb21VdGlsLnNldFBvc2l0aW9uKGEsbyl9LF91cGRhdGVHdWlkZUNvbG9yOmZ1bmN0aW9uKHQpe2lmKHRoaXMuX2d1aWRlc0NvbnRhaW5lcilmb3IodmFyIGU9MCxpPXRoaXMuX2d1aWRlc0NvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aDtlPGk7ZSsrKXRoaXMuX2d1aWRlc0NvbnRhaW5lci5jaGlsZE5vZGVzW2VdLnN0eWxlLmJhY2tncm91bmRDb2xvcj10fSxfY2xlYXJHdWlkZXM6ZnVuY3Rpb24oKXtpZih0aGlzLl9ndWlkZXNDb250YWluZXIpZm9yKDt0aGlzLl9ndWlkZXNDb250YWluZXIuZmlyc3RDaGlsZDspdGhpcy5fZ3VpZGVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2d1aWRlc0NvbnRhaW5lci5maXJzdENoaWxkKX0sX2dldFRvb2x0aXBUZXh0OmZ1bmN0aW9uKCl7dmFyIHQsZSxpPXRoaXMub3B0aW9ucy5zaG93TGVuZ3RoO3JldHVybiAwPT09dGhpcy5fbWFya2Vycy5sZW5ndGg/dD17dGV4dDpMLmRyYXdMb2NhbC5kcmF3LmhhbmRsZXJzLnBvbHlsaW5lLnRvb2x0aXAuc3RhcnR9OihlPWk/dGhpcy5fZ2V0TWVhc3VyZW1lbnRTdHJpbmcoKTpcIlwiLHQ9MT09PXRoaXMuX21hcmtlcnMubGVuZ3RoP3t0ZXh0OkwuZHJhd0xvY2FsLmRyYXcuaGFuZGxlcnMucG9seWxpbmUudG9vbHRpcC5jb250LHN1YnRleHQ6ZX06e3RleHQ6TC5kcmF3TG9jYWwuZHJhdy5oYW5kbGVycy5wb2x5bGluZS50b29sdGlwLmVuZCxzdWJ0ZXh0OmV9KSx0fSxfdXBkYXRlUnVubmluZ01lYXN1cmU6ZnVuY3Rpb24odCxlKXt2YXIgaSxvLGE9dGhpcy5fbWFya2Vycy5sZW5ndGg7MT09PXRoaXMuX21hcmtlcnMubGVuZ3RoP3RoaXMuX21lYXN1cmVtZW50UnVubmluZ1RvdGFsPTA6KGk9YS0oZT8yOjEpLG89TC5HZW9tZXRyeVV0aWwuaXNWZXJzaW9uMDd4KCk/dC5kaXN0YW5jZVRvKHRoaXMuX21hcmtlcnNbaV0uZ2V0TGF0TG5nKCkpKih0aGlzLm9wdGlvbnMuZmFjdG9yfHwxKTp0aGlzLl9tYXAuZGlzdGFuY2UodCx0aGlzLl9tYXJrZXJzW2ldLmdldExhdExuZygpKSoodGhpcy5vcHRpb25zLmZhY3Rvcnx8MSksdGhpcy5fbWVhc3VyZW1lbnRSdW5uaW5nVG90YWwrPW8qKGU/MTotMSkpfSxfZ2V0TWVhc3VyZW1lbnRTdHJpbmc6ZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXMuX2N1cnJlbnRMYXRMbmcsaT10aGlzLl9tYXJrZXJzW3RoaXMuX21hcmtlcnMubGVuZ3RoLTFdLmdldExhdExuZygpO3JldHVybiB0PUwuR2VvbWV0cnlVdGlsLmlzVmVyc2lvbjA3eCgpP2kmJmUmJmUuZGlzdGFuY2VUbz90aGlzLl9tZWFzdXJlbWVudFJ1bm5pbmdUb3RhbCtlLmRpc3RhbmNlVG8oaSkqKHRoaXMub3B0aW9ucy5mYWN0b3J8fDEpOnRoaXMuX21lYXN1cmVtZW50UnVubmluZ1RvdGFsfHwwOmkmJmU/dGhpcy5fbWVhc3VyZW1lbnRSdW5uaW5nVG90YWwrdGhpcy5fbWFwLmRpc3RhbmNlKGUsaSkqKHRoaXMub3B0aW9ucy5mYWN0b3J8fDEpOnRoaXMuX21lYXN1cmVtZW50UnVubmluZ1RvdGFsfHwwLEwuR2VvbWV0cnlVdGlsLnJlYWRhYmxlRGlzdGFuY2UodCx0aGlzLm9wdGlvbnMubWV0cmljLHRoaXMub3B0aW9ucy5mZWV0LHRoaXMub3B0aW9ucy5uYXV0aWMsdGhpcy5vcHRpb25zLnByZWNpc2lvbil9LF9zaG93RXJyb3JUb29sdGlwOmZ1bmN0aW9uKCl7dGhpcy5fZXJyb3JTaG93bj0hMCx0aGlzLl90b29sdGlwLnNob3dBc0Vycm9yKCkudXBkYXRlQ29udGVudCh7dGV4dDp0aGlzLm9wdGlvbnMuZHJhd0Vycm9yLm1lc3NhZ2V9KSx0aGlzLl91cGRhdGVHdWlkZUNvbG9yKHRoaXMub3B0aW9ucy5kcmF3RXJyb3IuY29sb3IpLHRoaXMuX3BvbHkuc2V0U3R5bGUoe2NvbG9yOnRoaXMub3B0aW9ucy5kcmF3RXJyb3IuY29sb3J9KSx0aGlzLl9jbGVhckhpZGVFcnJvclRpbWVvdXQoKSx0aGlzLl9oaWRlRXJyb3JUaW1lb3V0PXNldFRpbWVvdXQoTC5VdGlsLmJpbmQodGhpcy5faGlkZUVycm9yVG9vbHRpcCx0aGlzKSx0aGlzLm9wdGlvbnMuZHJhd0Vycm9yLnRpbWVvdXQpfSxfaGlkZUVycm9yVG9vbHRpcDpmdW5jdGlvbigpe3RoaXMuX2Vycm9yU2hvd249ITEsdGhpcy5fY2xlYXJIaWRlRXJyb3JUaW1lb3V0KCksdGhpcy5fdG9vbHRpcC5yZW1vdmVFcnJvcigpLnVwZGF0ZUNvbnRlbnQodGhpcy5fZ2V0VG9vbHRpcFRleHQoKSksdGhpcy5fdXBkYXRlR3VpZGVDb2xvcih0aGlzLm9wdGlvbnMuc2hhcGVPcHRpb25zLmNvbG9yKSx0aGlzLl9wb2x5LnNldFN0eWxlKHtjb2xvcjp0aGlzLm9wdGlvbnMuc2hhcGVPcHRpb25zLmNvbG9yfSl9LF9jbGVhckhpZGVFcnJvclRpbWVvdXQ6ZnVuY3Rpb24oKXt0aGlzLl9oaWRlRXJyb3JUaW1lb3V0JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVFcnJvclRpbWVvdXQpLHRoaXMuX2hpZGVFcnJvclRpbWVvdXQ9bnVsbCl9LF9kaXNhYmxlTmV3TWFya2VyczpmdW5jdGlvbigpe3RoaXMuX2Rpc2FibGVNYXJrZXJzPSEwfSxfZW5hYmxlTmV3TWFya2VyczpmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLl9kaXNhYmxlTWFya2Vycz0hMX0uYmluZCh0aGlzKSw1MCl9LF9jbGVhblVwU2hhcGU6ZnVuY3Rpb24oKXt0aGlzLl9tYXJrZXJzLmxlbmd0aD4xJiZ0aGlzLl9tYXJrZXJzW3RoaXMuX21hcmtlcnMubGVuZ3RoLTFdLm9mZihcImNsaWNrXCIsdGhpcy5fZmluaXNoU2hhcGUsdGhpcyl9LF9maXJlQ3JlYXRlZEV2ZW50OmZ1bmN0aW9uKCl7dmFyIHQ9bmV3IHRoaXMuUG9seSh0aGlzLl9wb2x5LmdldExhdExuZ3MoKSx0aGlzLm9wdGlvbnMuc2hhcGVPcHRpb25zKTtMLkRyYXcuRmVhdHVyZS5wcm90b3R5cGUuX2ZpcmVDcmVhdGVkRXZlbnQuY2FsbCh0aGlzLHQpfX0pLEwuRHJhdy5Qb2x5Z29uPUwuRHJhdy5Qb2x5bGluZS5leHRlbmQoe3N0YXRpY3M6e1RZUEU6XCJwb2x5Z29uXCJ9LFBvbHk6TC5Qb2x5Z29uLG9wdGlvbnM6e3Nob3dBcmVhOiExLHNob3dMZW5ndGg6ITEsc2hhcGVPcHRpb25zOntzdHJva2U6ITAsY29sb3I6XCIjMzM4OGZmXCIsd2VpZ2h0OjQsb3BhY2l0eTouNSxmaWxsOiEwLGZpbGxDb2xvcjpudWxsLGZpbGxPcGFjaXR5Oi4yLGNsaWNrYWJsZTohMH0sbWV0cmljOiEwLGZlZXQ6ITAsbmF1dGljOiExLHByZWNpc2lvbjp7fX0saW5pdGlhbGl6ZTpmdW5jdGlvbih0LGUpe0wuRHJhdy5Qb2x5bGluZS5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsdCxlKSx0aGlzLnR5cGU9TC5EcmF3LlBvbHlnb24uVFlQRX0sX3VwZGF0ZUZpbmlzaEhhbmRsZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9tYXJrZXJzLmxlbmd0aDsxPT09dCYmdGhpcy5fbWFya2Vyc1swXS5vbihcImNsaWNrXCIsdGhpcy5fZmluaXNoU2hhcGUsdGhpcyksdD4yJiYodGhpcy5fbWFya2Vyc1t0LTFdLm9uKFwiZGJsY2xpY2tcIix0aGlzLl9maW5pc2hTaGFwZSx0aGlzKSx0PjMmJnRoaXMuX21hcmtlcnNbdC0yXS5vZmYoXCJkYmxjbGlja1wiLHRoaXMuX2ZpbmlzaFNoYXBlLHRoaXMpKX0sX2dldFRvb2x0aXBUZXh0OmZ1bmN0aW9uKCl7dmFyIHQsZTtyZXR1cm4gMD09PXRoaXMuX21hcmtlcnMubGVuZ3RoP3Q9TC5kcmF3TG9jYWwuZHJhdy5oYW5kbGVycy5wb2x5Z29uLnRvb2x0aXAuc3RhcnQ6dGhpcy5fbWFya2Vycy5sZW5ndGg8Mz8odD1MLmRyYXdMb2NhbC5kcmF3LmhhbmRsZXJzLnBvbHlnb24udG9vbHRpcC5jb250LGU9dGhpcy5fZ2V0TWVhc3VyZW1lbnRTdHJpbmcoKSk6KHQ9TC5kcmF3TG9jYWwuZHJhdy5oYW5kbGVycy5wb2x5Z29uLnRvb2x0aXAuZW5kLGU9dGhpcy5fZ2V0TWVhc3VyZW1lbnRTdHJpbmcoKSkse3RleHQ6dCxzdWJ0ZXh0OmV9fSxfZ2V0TWVhc3VyZW1lbnRTdHJpbmc6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9hcmVhLGU9XCJcIjtyZXR1cm4gdHx8dGhpcy5vcHRpb25zLnNob3dMZW5ndGg/KHRoaXMub3B0aW9ucy5zaG93TGVuZ3RoJiYoZT1MLkRyYXcuUG9seWxpbmUucHJvdG90eXBlLl9nZXRNZWFzdXJlbWVudFN0cmluZy5jYWxsKHRoaXMpKSx0JiYoZSs9XCI8YnI+XCIrTC5HZW9tZXRyeVV0aWwucmVhZGFibGVBcmVhKHQsdGhpcy5vcHRpb25zLm1ldHJpYyx0aGlzLm9wdGlvbnMucHJlY2lzaW9uKSksZSk6bnVsbH0sX3NoYXBlSXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXJrZXJzLmxlbmd0aD49M30sX3ZlcnRleENoYW5nZWQ6ZnVuY3Rpb24odCxlKXt2YXIgaTshdGhpcy5vcHRpb25zLmFsbG93SW50ZXJzZWN0aW9uJiZ0aGlzLm9wdGlvbnMuc2hvd0FyZWEmJihpPXRoaXMuX3BvbHkuZ2V0TGF0TG5ncygpLHRoaXMuX2FyZWE9TC5HZW9tZXRyeVV0aWwuZ2VvZGVzaWNBcmVhKGkpKSxMLkRyYXcuUG9seWxpbmUucHJvdG90eXBlLl92ZXJ0ZXhDaGFuZ2VkLmNhbGwodGhpcyx0LGUpfSxfY2xlYW5VcFNoYXBlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fbWFya2Vycy5sZW5ndGg7dD4wJiYodGhpcy5fbWFya2Vyc1swXS5vZmYoXCJjbGlja1wiLHRoaXMuX2ZpbmlzaFNoYXBlLHRoaXMpLHQ+MiYmdGhpcy5fbWFya2Vyc1t0LTFdLm9mZihcImRibGNsaWNrXCIsdGhpcy5fZmluaXNoU2hhcGUsdGhpcykpfX0pLEwuU2ltcGxlU2hhcGU9e30sTC5EcmF3LlNpbXBsZVNoYXBlPUwuRHJhdy5GZWF0dXJlLmV4dGVuZCh7b3B0aW9uczp7cmVwZWF0TW9kZTohMX0saW5pdGlhbGl6ZTpmdW5jdGlvbih0LGUpe3RoaXMuX2VuZExhYmVsVGV4dD1MLmRyYXdMb2NhbC5kcmF3LmhhbmRsZXJzLnNpbXBsZXNoYXBlLnRvb2x0aXAuZW5kLEwuRHJhdy5GZWF0dXJlLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyx0LGUpfSxhZGRIb29rczpmdW5jdGlvbigpe0wuRHJhdy5GZWF0dXJlLnByb3RvdHlwZS5hZGRIb29rcy5jYWxsKHRoaXMpLHRoaXMuX21hcCYmKHRoaXMuX21hcERyYWdnYWJsZT10aGlzLl9tYXAuZHJhZ2dpbmcuZW5hYmxlZCgpLHRoaXMuX21hcERyYWdnYWJsZSYmdGhpcy5fbWFwLmRyYWdnaW5nLmRpc2FibGUoKSx0aGlzLl9jb250YWluZXIuc3R5bGUuY3Vyc29yPVwiY3Jvc3NoYWlyXCIsdGhpcy5fdG9vbHRpcC51cGRhdGVDb250ZW50KHt0ZXh0OnRoaXMuX2luaXRpYWxMYWJlbFRleHR9KSx0aGlzLl9tYXAub24oXCJtb3VzZWRvd25cIix0aGlzLl9vbk1vdXNlRG93bix0aGlzKS5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpLm9uKFwidG91Y2hzdGFydFwiLHRoaXMuX29uTW91c2VEb3duLHRoaXMpLm9uKFwidG91Y2htb3ZlXCIsdGhpcy5fb25Nb3VzZU1vdmUsdGhpcyksZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLEwuRG9tRXZlbnQucHJldmVudERlZmF1bHQse3Bhc3NpdmU6ITF9KSl9LHJlbW92ZUhvb2tzOmZ1bmN0aW9uKCl7TC5EcmF3LkZlYXR1cmUucHJvdG90eXBlLnJlbW92ZUhvb2tzLmNhbGwodGhpcyksdGhpcy5fbWFwJiYodGhpcy5fbWFwRHJhZ2dhYmxlJiZ0aGlzLl9tYXAuZHJhZ2dpbmcuZW5hYmxlKCksdGhpcy5fY29udGFpbmVyLnN0eWxlLmN1cnNvcj1cIlwiLHRoaXMuX21hcC5vZmYoXCJtb3VzZWRvd25cIix0aGlzLl9vbk1vdXNlRG93bix0aGlzKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKS5vZmYoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5fb25Nb3VzZURvd24sdGhpcykub2ZmKFwidG91Y2htb3ZlXCIsdGhpcy5fb25Nb3VzZU1vdmUsdGhpcyksTC5Eb21FdmVudC5vZmYoZSxcIm1vdXNldXBcIix0aGlzLl9vbk1vdXNlVXAsdGhpcyksTC5Eb21FdmVudC5vZmYoZSxcInRvdWNoZW5kXCIsdGhpcy5fb25Nb3VzZVVwLHRoaXMpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixMLkRvbUV2ZW50LnByZXZlbnREZWZhdWx0KSx0aGlzLl9zaGFwZSYmKHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLl9zaGFwZSksZGVsZXRlIHRoaXMuX3NoYXBlKSksdGhpcy5faXNEcmF3aW5nPSExfSxfZ2V0VG9vbHRpcFRleHQ6ZnVuY3Rpb24oKXtyZXR1cm57dGV4dDp0aGlzLl9lbmRMYWJlbFRleHR9fSxfb25Nb3VzZURvd246ZnVuY3Rpb24odCl7dGhpcy5faXNEcmF3aW5nPSEwLHRoaXMuX3N0YXJ0TGF0TG5nPXQubGF0bG5nLEwuRG9tRXZlbnQub24oZSxcIm1vdXNldXBcIix0aGlzLl9vbk1vdXNlVXAsdGhpcykub24oZSxcInRvdWNoZW5kXCIsdGhpcy5fb25Nb3VzZVVwLHRoaXMpLnByZXZlbnREZWZhdWx0KHQub3JpZ2luYWxFdmVudCl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbih0KXt2YXIgZT10LmxhdGxuZzt0aGlzLl90b29sdGlwLnVwZGF0ZVBvc2l0aW9uKGUpLHRoaXMuX2lzRHJhd2luZyYmKHRoaXMuX3Rvb2x0aXAudXBkYXRlQ29udGVudCh0aGlzLl9nZXRUb29sdGlwVGV4dCgpKSx0aGlzLl9kcmF3U2hhcGUoZSkpfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKCl7dGhpcy5fc2hhcGUmJnRoaXMuX2ZpcmVDcmVhdGVkRXZlbnQoKSx0aGlzLmRpc2FibGUoKSx0aGlzLm9wdGlvbnMucmVwZWF0TW9kZSYmdGhpcy5lbmFibGUoKX19KSxMLkRyYXcuUmVjdGFuZ2xlPUwuRHJhdy5TaW1wbGVTaGFwZS5leHRlbmQoe3N0YXRpY3M6e1RZUEU6XCJyZWN0YW5nbGVcIn0sb3B0aW9uczp7c2hhcGVPcHRpb25zOntzdHJva2U6ITAsY29sb3I6XCIjMzM4OGZmXCIsd2VpZ2h0OjQsb3BhY2l0eTouNSxmaWxsOiEwLGZpbGxDb2xvcjpudWxsLGZpbGxPcGFjaXR5Oi4yLGNsaWNrYWJsZTohMH0sc2hvd0FyZWE6ITAsbWV0cmljOiEwfSxpbml0aWFsaXplOmZ1bmN0aW9uKHQsZSl7dGhpcy50eXBlPUwuRHJhdy5SZWN0YW5nbGUuVFlQRSx0aGlzLl9pbml0aWFsTGFiZWxUZXh0PUwuZHJhd0xvY2FsLmRyYXcuaGFuZGxlcnMucmVjdGFuZ2xlLnRvb2x0aXAuc3RhcnQsTC5EcmF3LlNpbXBsZVNoYXBlLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyx0LGUpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5fZW5hYmxlZCYmKHRoaXMuX2lzQ3VycmVudGx5VHdvQ2xpY2tEcmF3aW5nPSExLEwuRHJhdy5TaW1wbGVTaGFwZS5wcm90b3R5cGUuZGlzYWJsZS5jYWxsKHRoaXMpKX0sX29uTW91c2VVcDpmdW5jdGlvbih0KXtpZighdGhpcy5fc2hhcGUmJiF0aGlzLl9pc0N1cnJlbnRseVR3b0NsaWNrRHJhd2luZylyZXR1cm4gdm9pZCh0aGlzLl9pc0N1cnJlbnRseVR3b0NsaWNrRHJhd2luZz0hMCk7dGhpcy5faXNDdXJyZW50bHlUd29DbGlja0RyYXdpbmcmJiFvKHQudGFyZ2V0LFwibGVhZmxldC1wYW5lXCIpfHxMLkRyYXcuU2ltcGxlU2hhcGUucHJvdG90eXBlLl9vbk1vdXNlVXAuY2FsbCh0aGlzKX0sX2RyYXdTaGFwZTpmdW5jdGlvbih0KXt0aGlzLl9zaGFwZT90aGlzLl9zaGFwZS5zZXRCb3VuZHMobmV3IEwuTGF0TG5nQm91bmRzKHRoaXMuX3N0YXJ0TGF0TG5nLHQpKToodGhpcy5fc2hhcGU9bmV3IEwuUmVjdGFuZ2xlKG5ldyBMLkxhdExuZ0JvdW5kcyh0aGlzLl9zdGFydExhdExuZyx0KSx0aGlzLm9wdGlvbnMuc2hhcGVPcHRpb25zKSx0aGlzLl9tYXAuYWRkTGF5ZXIodGhpcy5fc2hhcGUpKX0sX2ZpcmVDcmVhdGVkRXZlbnQ6ZnVuY3Rpb24oKXt2YXIgdD1uZXcgTC5SZWN0YW5nbGUodGhpcy5fc2hhcGUuZ2V0Qm91bmRzKCksdGhpcy5vcHRpb25zLnNoYXBlT3B0aW9ucyk7TC5EcmF3LlNpbXBsZVNoYXBlLnByb3RvdHlwZS5fZmlyZUNyZWF0ZWRFdmVudC5jYWxsKHRoaXMsdCl9LF9nZXRUb29sdGlwVGV4dDpmdW5jdGlvbigpe3ZhciB0LGUsaSxvPUwuRHJhdy5TaW1wbGVTaGFwZS5wcm90b3R5cGUuX2dldFRvb2x0aXBUZXh0LmNhbGwodGhpcyksYT10aGlzLl9zaGFwZSxuPXRoaXMub3B0aW9ucy5zaG93QXJlYTtyZXR1cm4gYSYmKHQ9dGhpcy5fc2hhcGUuX2RlZmF1bHRTaGFwZT90aGlzLl9zaGFwZS5fZGVmYXVsdFNoYXBlKCk6dGhpcy5fc2hhcGUuZ2V0TGF0TG5ncygpLGU9TC5HZW9tZXRyeVV0aWwuZ2VvZGVzaWNBcmVhKHQpLGk9bj9MLkdlb21ldHJ5VXRpbC5yZWFkYWJsZUFyZWEoZSx0aGlzLm9wdGlvbnMubWV0cmljKTpcIlwiKSx7dGV4dDpvLnRleHQsc3VidGV4dDppfX19KSxMLkRyYXcuTWFya2VyPUwuRHJhdy5GZWF0dXJlLmV4dGVuZCh7c3RhdGljczp7VFlQRTpcIm1hcmtlclwifSxvcHRpb25zOntpY29uOm5ldyBMLkljb24uRGVmYXVsdCxyZXBlYXRNb2RlOiExLHpJbmRleE9mZnNldDoyZTN9LGluaXRpYWxpemU6ZnVuY3Rpb24odCxlKXt0aGlzLnR5cGU9TC5EcmF3Lk1hcmtlci5UWVBFLHRoaXMuX2luaXRpYWxMYWJlbFRleHQ9TC5kcmF3TG9jYWwuZHJhdy5oYW5kbGVycy5tYXJrZXIudG9vbHRpcC5zdGFydCxMLkRyYXcuRmVhdHVyZS5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsdCxlKX0sYWRkSG9va3M6ZnVuY3Rpb24oKXtMLkRyYXcuRmVhdHVyZS5wcm90b3R5cGUuYWRkSG9va3MuY2FsbCh0aGlzKSx0aGlzLl9tYXAmJih0aGlzLl90b29sdGlwLnVwZGF0ZUNvbnRlbnQoe3RleHQ6dGhpcy5faW5pdGlhbExhYmVsVGV4dH0pLHRoaXMuX21vdXNlTWFya2VyfHwodGhpcy5fbW91c2VNYXJrZXI9TC5tYXJrZXIodGhpcy5fbWFwLmdldENlbnRlcigpLHtpY29uOkwuZGl2SWNvbih7Y2xhc3NOYW1lOlwibGVhZmxldC1tb3VzZS1tYXJrZXJcIixpY29uQW5jaG9yOlsyMCwyMF0saWNvblNpemU6WzQwLDQwXX0pLG9wYWNpdHk6MCx6SW5kZXhPZmZzZXQ6dGhpcy5vcHRpb25zLnpJbmRleE9mZnNldH0pKSx0aGlzLl9tb3VzZU1hcmtlci5vbihcImNsaWNrXCIsdGhpcy5fb25DbGljayx0aGlzKS5hZGRUbyh0aGlzLl9tYXApLHRoaXMuX21hcC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpLHRoaXMuX21hcC5vbihcImNsaWNrXCIsdGhpcy5fb25Ub3VjaCx0aGlzKSl9LHJlbW92ZUhvb2tzOmZ1bmN0aW9uKCl7TC5EcmF3LkZlYXR1cmUucHJvdG90eXBlLnJlbW92ZUhvb2tzLmNhbGwodGhpcyksdGhpcy5fbWFwJiYodGhpcy5fbWFwLm9mZihcImNsaWNrXCIsdGhpcy5fb25DbGljayx0aGlzKS5vZmYoXCJjbGlja1wiLHRoaXMuX29uVG91Y2gsdGhpcyksdGhpcy5fbWFya2VyJiYodGhpcy5fbWFya2VyLm9mZihcImNsaWNrXCIsdGhpcy5fb25DbGljayx0aGlzKSx0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5fbWFya2VyKSxkZWxldGUgdGhpcy5fbWFya2VyKSx0aGlzLl9tb3VzZU1hcmtlci5vZmYoXCJjbGlja1wiLHRoaXMuX29uQ2xpY2ssdGhpcyksdGhpcy5fbWFwLnJlbW92ZUxheWVyKHRoaXMuX21vdXNlTWFya2VyKSxkZWxldGUgdGhpcy5fbW91c2VNYXJrZXIsdGhpcy5fbWFwLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKHQpe3ZhciBlPXQubGF0bG5nO3RoaXMuX3Rvb2x0aXAudXBkYXRlUG9zaXRpb24oZSksdGhpcy5fbW91c2VNYXJrZXIuc2V0TGF0TG5nKGUpLHRoaXMuX21hcmtlcj8oZT10aGlzLl9tb3VzZU1hcmtlci5nZXRMYXRMbmcoKSx0aGlzLl9tYXJrZXIuc2V0TGF0TG5nKGUpKToodGhpcy5fbWFya2VyPXRoaXMuX2NyZWF0ZU1hcmtlcihlKSx0aGlzLl9tYXJrZXIub24oXCJjbGlja1wiLHRoaXMuX29uQ2xpY2ssdGhpcyksdGhpcy5fbWFwLm9uKFwiY2xpY2tcIix0aGlzLl9vbkNsaWNrLHRoaXMpLmFkZExheWVyKHRoaXMuX21hcmtlcikpfSxfY3JlYXRlTWFya2VyOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgTC5NYXJrZXIodCx7aWNvbjp0aGlzLm9wdGlvbnMuaWNvbix6SW5kZXhPZmZzZXQ6dGhpcy5vcHRpb25zLnpJbmRleE9mZnNldH0pfSxfb25DbGljazpmdW5jdGlvbigpe3RoaXMuX2ZpcmVDcmVhdGVkRXZlbnQoKSx0aGlzLmRpc2FibGUoKSx0aGlzLm9wdGlvbnMucmVwZWF0TW9kZSYmdGhpcy5lbmFibGUoKX0sX29uVG91Y2g6ZnVuY3Rpb24odCl7dGhpcy5fb25Nb3VzZU1vdmUodCksdGhpcy5fb25DbGljaygpfSxfZmlyZUNyZWF0ZWRFdmVudDpmdW5jdGlvbigpe3ZhciB0PW5ldyBMLk1hcmtlci5Ub3VjaCh0aGlzLl9tYXJrZXIuZ2V0TGF0TG5nKCkse2ljb246dGhpcy5vcHRpb25zLmljb259KTtMLkRyYXcuRmVhdHVyZS5wcm90b3R5cGUuX2ZpcmVDcmVhdGVkRXZlbnQuY2FsbCh0aGlzLHQpfX0pLEwuRHJhdy5DaXJjbGVNYXJrZXI9TC5EcmF3Lk1hcmtlci5leHRlbmQoe3N0YXRpY3M6e1RZUEU6XCJjaXJjbGVtYXJrZXJcIn0sb3B0aW9uczp7c3Ryb2tlOiEwLGNvbG9yOlwiIzMzODhmZlwiLHdlaWdodDo0LG9wYWNpdHk6LjUsZmlsbDohMCxmaWxsQ29sb3I6bnVsbCxmaWxsT3BhY2l0eTouMixjbGlja2FibGU6ITAsekluZGV4T2Zmc2V0OjJlM30saW5pdGlhbGl6ZTpmdW5jdGlvbih0LGUpe3RoaXMudHlwZT1MLkRyYXcuQ2lyY2xlTWFya2VyLlRZUEUsdGhpcy5faW5pdGlhbExhYmVsVGV4dD1MLmRyYXdMb2NhbC5kcmF3LmhhbmRsZXJzLmNpcmNsZW1hcmtlci50b29sdGlwLnN0YXJ0LEwuRHJhdy5GZWF0dXJlLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyx0LGUpfSxfZmlyZUNyZWF0ZWRFdmVudDpmdW5jdGlvbigpe3ZhciB0PW5ldyBMLkNpcmNsZU1hcmtlcih0aGlzLl9tYXJrZXIuZ2V0TGF0TG5nKCksdGhpcy5vcHRpb25zKTtMLkRyYXcuRmVhdHVyZS5wcm90b3R5cGUuX2ZpcmVDcmVhdGVkRXZlbnQuY2FsbCh0aGlzLHQpfSxfY3JlYXRlTWFya2VyOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgTC5DaXJjbGVNYXJrZXIodCx0aGlzLm9wdGlvbnMpfX0pLEwuRHJhdy5DaXJjbGU9TC5EcmF3LlNpbXBsZVNoYXBlLmV4dGVuZCh7c3RhdGljczp7VFlQRTpcImNpcmNsZVwifSxvcHRpb25zOntzaGFwZU9wdGlvbnM6e3N0cm9rZTohMCxjb2xvcjpcIiMzMzg4ZmZcIix3ZWlnaHQ6NCxvcGFjaXR5Oi41LGZpbGw6ITAsZmlsbENvbG9yOm51bGwsZmlsbE9wYWNpdHk6LjIsY2xpY2thYmxlOiEwfSxzaG93UmFkaXVzOiEwLG1ldHJpYzohMCxmZWV0OiEwLG5hdXRpYzohMX0saW5pdGlhbGl6ZTpmdW5jdGlvbih0LGUpe3RoaXMudHlwZT1MLkRyYXcuQ2lyY2xlLlRZUEUsdGhpcy5faW5pdGlhbExhYmVsVGV4dD1MLmRyYXdMb2NhbC5kcmF3LmhhbmRsZXJzLmNpcmNsZS50b29sdGlwLnN0YXJ0LEwuRHJhdy5TaW1wbGVTaGFwZS5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsdCxlKX0sX2RyYXdTaGFwZTpmdW5jdGlvbih0KXtpZihMLkdlb21ldHJ5VXRpbC5pc1ZlcnNpb24wN3goKSl2YXIgZT10aGlzLl9zdGFydExhdExuZy5kaXN0YW5jZVRvKHQpO2Vsc2UgdmFyIGU9dGhpcy5fbWFwLmRpc3RhbmNlKHRoaXMuX3N0YXJ0TGF0TG5nLHQpO3RoaXMuX3NoYXBlP3RoaXMuX3NoYXBlLnNldFJhZGl1cyhlKToodGhpcy5fc2hhcGU9bmV3IEwuQ2lyY2xlKHRoaXMuX3N0YXJ0TGF0TG5nLGUsdGhpcy5vcHRpb25zLnNoYXBlT3B0aW9ucyksdGhpcy5fbWFwLmFkZExheWVyKHRoaXMuX3NoYXBlKSl9LF9maXJlQ3JlYXRlZEV2ZW50OmZ1bmN0aW9uKCl7dmFyIHQ9bmV3IEwuQ2lyY2xlKHRoaXMuX3N0YXJ0TGF0TG5nLHRoaXMuX3NoYXBlLmdldFJhZGl1cygpLHRoaXMub3B0aW9ucy5zaGFwZU9wdGlvbnMpO0wuRHJhdy5TaW1wbGVTaGFwZS5wcm90b3R5cGUuX2ZpcmVDcmVhdGVkRXZlbnQuY2FsbCh0aGlzLHQpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24odCl7dmFyIGUsaT10LmxhdGxuZyxvPXRoaXMub3B0aW9ucy5zaG93UmFkaXVzLGE9dGhpcy5vcHRpb25zLm1ldHJpYztpZih0aGlzLl90b29sdGlwLnVwZGF0ZVBvc2l0aW9uKGkpLHRoaXMuX2lzRHJhd2luZyl7dGhpcy5fZHJhd1NoYXBlKGkpLGU9dGhpcy5fc2hhcGUuZ2V0UmFkaXVzKCkudG9GaXhlZCgxKTt2YXIgbj1cIlwiO28mJihuPUwuZHJhd0xvY2FsLmRyYXcuaGFuZGxlcnMuY2lyY2xlLnJhZGl1cytcIjogXCIrTC5HZW9tZXRyeVV0aWwucmVhZGFibGVEaXN0YW5jZShlLGEsdGhpcy5vcHRpb25zLmZlZXQsdGhpcy5vcHRpb25zLm5hdXRpYykpLHRoaXMuX3Rvb2x0aXAudXBkYXRlQ29udGVudCh7dGV4dDp0aGlzLl9lbmRMYWJlbFRleHQsc3VidGV4dDpufSl9fX0pLEwuRWRpdD1MLkVkaXR8fHt9LEwuRWRpdC5NYXJrZXI9TC5IYW5kbGVyLmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbih0LGUpe3RoaXMuX21hcmtlcj10LEwuc2V0T3B0aW9ucyh0aGlzLGUpfSxhZGRIb29rczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX21hcmtlcjt0LmRyYWdnaW5nLmVuYWJsZSgpLHQub24oXCJkcmFnZW5kXCIsdGhpcy5fb25EcmFnRW5kLHQpLHRoaXMuX3RvZ2dsZU1hcmtlckhpZ2hsaWdodCgpfSxyZW1vdmVIb29rczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX21hcmtlcjt0LmRyYWdnaW5nLmRpc2FibGUoKSx0Lm9mZihcImRyYWdlbmRcIix0aGlzLl9vbkRyYWdFbmQsdCksdGhpcy5fdG9nZ2xlTWFya2VySGlnaGxpZ2h0KCl9LF9vbkRyYWdFbmQ6ZnVuY3Rpb24odCl7dmFyIGU9dC50YXJnZXQ7ZS5lZGl0ZWQ9ITAsdGhpcy5fbWFwLmZpcmUoTC5EcmF3LkV2ZW50LkVESVRNT1ZFLHtsYXllcjplfSl9LF90b2dnbGVNYXJrZXJIaWdobGlnaHQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9tYXJrZXIuX2ljb247dCYmKHQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixMLkRvbVV0aWwuaGFzQ2xhc3ModCxcImxlYWZsZXQtZWRpdC1tYXJrZXItc2VsZWN0ZWRcIik/KEwuRG9tVXRpbC5yZW1vdmVDbGFzcyh0LFwibGVhZmxldC1lZGl0LW1hcmtlci1zZWxlY3RlZFwiKSx0aGlzLl9vZmZzZXRNYXJrZXIodCwtNCkpOihMLkRvbVV0aWwuYWRkQ2xhc3ModCxcImxlYWZsZXQtZWRpdC1tYXJrZXItc2VsZWN0ZWRcIiksdGhpcy5fb2Zmc2V0TWFya2VyKHQsNCkpLHQuc3R5bGUuZGlzcGxheT1cIlwiKX0sX29mZnNldE1hcmtlcjpmdW5jdGlvbih0LGUpe3ZhciBpPXBhcnNlSW50KHQuc3R5bGUubWFyZ2luVG9wLDEwKS1lLG89cGFyc2VJbnQodC5zdHlsZS5tYXJnaW5MZWZ0LDEwKS1lO3Quc3R5bGUubWFyZ2luVG9wPWkrXCJweFwiLHQuc3R5bGUubWFyZ2luTGVmdD1vK1wicHhcIn19KSxMLk1hcmtlci5hZGRJbml0SG9vayhmdW5jdGlvbigpe0wuRWRpdC5NYXJrZXImJih0aGlzLmVkaXRpbmc9bmV3IEwuRWRpdC5NYXJrZXIodGhpcyksdGhpcy5vcHRpb25zLmVkaXRhYmxlJiZ0aGlzLmVkaXRpbmcuZW5hYmxlKCkpfSksTC5FZGl0PUwuRWRpdHx8e30sTC5FZGl0LlBvbHk9TC5IYW5kbGVyLmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbih0KXt0aGlzLmxhdGxuZ3M9W3QuX2xhdGxuZ3NdLHQuX2hvbGVzJiYodGhpcy5sYXRsbmdzPXRoaXMubGF0bG5ncy5jb25jYXQodC5faG9sZXMpKSx0aGlzLl9wb2x5PXQsdGhpcy5fcG9seS5vbihcInJldmVydC1lZGl0ZWRcIix0aGlzLl91cGRhdGVMYXRMbmdzLHRoaXMpfSxfZGVmYXVsdFNoYXBlOmZ1bmN0aW9uKCl7cmV0dXJuIEwuUG9seWxpbmUuX2ZsYXQ/TC5Qb2x5bGluZS5fZmxhdCh0aGlzLl9wb2x5Ll9sYXRsbmdzKT90aGlzLl9wb2x5Ll9sYXRsbmdzOnRoaXMuX3BvbHkuX2xhdGxuZ3NbMF06dGhpcy5fcG9seS5fbGF0bG5nc30sX2VhY2hWZXJ0ZXhIYW5kbGVyOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5fdmVydGljZXNIYW5kbGVycy5sZW5ndGg7ZSsrKXQodGhpcy5fdmVydGljZXNIYW5kbGVyc1tlXSl9LGFkZEhvb2tzOmZ1bmN0aW9uKCl7dGhpcy5faW5pdEhhbmRsZXJzKCksdGhpcy5fZWFjaFZlcnRleEhhbmRsZXIoZnVuY3Rpb24odCl7dC5hZGRIb29rcygpfSl9LHJlbW92ZUhvb2tzOmZ1bmN0aW9uKCl7dGhpcy5fZWFjaFZlcnRleEhhbmRsZXIoZnVuY3Rpb24odCl7dC5yZW1vdmVIb29rcygpfSl9LHVwZGF0ZU1hcmtlcnM6ZnVuY3Rpb24oKXt0aGlzLl9lYWNoVmVydGV4SGFuZGxlcihmdW5jdGlvbih0KXt0LnVwZGF0ZU1hcmtlcnMoKX0pfSxfaW5pdEhhbmRsZXJzOmZ1bmN0aW9uKCl7dGhpcy5fdmVydGljZXNIYW5kbGVycz1bXTtmb3IodmFyIHQ9MDt0PHRoaXMubGF0bG5ncy5sZW5ndGg7dCsrKXRoaXMuX3ZlcnRpY2VzSGFuZGxlcnMucHVzaChuZXcgTC5FZGl0LlBvbHlWZXJ0aWNlc0VkaXQodGhpcy5fcG9seSx0aGlzLmxhdGxuZ3NbdF0sdGhpcy5fcG9seS5vcHRpb25zLnBvbHkpKX0sX3VwZGF0ZUxhdExuZ3M6ZnVuY3Rpb24odCl7dGhpcy5sYXRsbmdzPVt0LmxheWVyLl9sYXRsbmdzXSx0LmxheWVyLl9ob2xlcyYmKHRoaXMubGF0bG5ncz10aGlzLmxhdGxuZ3MuY29uY2F0KHQubGF5ZXIuX2hvbGVzKSl9fSksTC5FZGl0LlBvbHlWZXJ0aWNlc0VkaXQ9TC5IYW5kbGVyLmV4dGVuZCh7b3B0aW9uczp7aWNvbjpuZXcgTC5EaXZJY29uKHtpY29uU2l6ZTpuZXcgTC5Qb2ludCg4LDgpLGNsYXNzTmFtZTpcImxlYWZsZXQtZGl2LWljb24gbGVhZmxldC1lZGl0aW5nLWljb25cIn0pLHRvdWNoSWNvbjpuZXcgTC5EaXZJY29uKHtpY29uU2l6ZTpuZXcgTC5Qb2ludCgyMCwyMCksY2xhc3NOYW1lOlwibGVhZmxldC1kaXYtaWNvbiBsZWFmbGV0LWVkaXRpbmctaWNvbiBsZWFmbGV0LXRvdWNoLWljb25cIn0pLGRyYXdFcnJvcjp7Y29sb3I6XCIjYjAwYjAwXCIsdGltZW91dDoxZTN9fSxpbml0aWFsaXplOmZ1bmN0aW9uKHQsZSxpKXtMLkJyb3dzZXIudG91Y2gmJih0aGlzLm9wdGlvbnMuaWNvbj10aGlzLm9wdGlvbnMudG91Y2hJY29uKSx0aGlzLl9wb2x5PXQsaSYmaS5kcmF3RXJyb3ImJihpLmRyYXdFcnJvcj1MLlV0aWwuZXh0ZW5kKHt9LHRoaXMub3B0aW9ucy5kcmF3RXJyb3IsaS5kcmF3RXJyb3IpKSx0aGlzLl9sYXRsbmdzPWUsTC5zZXRPcHRpb25zKHRoaXMsaSl9LF9kZWZhdWx0U2hhcGU6ZnVuY3Rpb24oKXtyZXR1cm4gTC5Qb2x5bGluZS5fZmxhdD9MLlBvbHlsaW5lLl9mbGF0KHRoaXMuX2xhdGxuZ3MpP3RoaXMuX2xhdGxuZ3M6dGhpcy5fbGF0bG5nc1swXTp0aGlzLl9sYXRsbmdzfSxhZGRIb29rczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3BvbHksZT10Ll9wYXRoO3QgaW5zdGFuY2VvZiBMLlBvbHlnb258fCh0Lm9wdGlvbnMuZmlsbD0hMSx0Lm9wdGlvbnMuZWRpdGluZyYmKHQub3B0aW9ucy5lZGl0aW5nLmZpbGw9ITEpKSxlJiZ0Lm9wdGlvbnMuZWRpdGluZyYmdC5vcHRpb25zLmVkaXRpbmcuY2xhc3NOYW1lJiYodC5vcHRpb25zLm9yaWdpbmFsLmNsYXNzTmFtZSYmdC5vcHRpb25zLm9yaWdpbmFsLmNsYXNzTmFtZS5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbih0KXtMLkRvbVV0aWwucmVtb3ZlQ2xhc3MoZSx0KX0pLHQub3B0aW9ucy5lZGl0aW5nLmNsYXNzTmFtZS5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbih0KXtMLkRvbVV0aWwuYWRkQ2xhc3MoZSx0KX0pKSx0LnNldFN0eWxlKHQub3B0aW9ucy5lZGl0aW5nKSx0aGlzLl9wb2x5Ll9tYXAmJih0aGlzLl9tYXA9dGhpcy5fcG9seS5fbWFwLHRoaXMuX21hcmtlckdyb3VwfHx0aGlzLl9pbml0TWFya2VycygpLHRoaXMuX3BvbHkuX21hcC5hZGRMYXllcih0aGlzLl9tYXJrZXJHcm91cCkpfSxyZW1vdmVIb29rczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3BvbHksZT10Ll9wYXRoO2UmJnQub3B0aW9ucy5lZGl0aW5nJiZ0Lm9wdGlvbnMuZWRpdGluZy5jbGFzc05hbWUmJih0Lm9wdGlvbnMuZWRpdGluZy5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24odCl7TC5Eb21VdGlsLnJlbW92ZUNsYXNzKGUsdCl9KSx0Lm9wdGlvbnMub3JpZ2luYWwuY2xhc3NOYW1lJiZ0Lm9wdGlvbnMub3JpZ2luYWwuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe0wuRG9tVXRpbC5hZGRDbGFzcyhlLHQpfSkpLHQuc2V0U3R5bGUodC5vcHRpb25zLm9yaWdpbmFsKSx0Ll9tYXAmJih0Ll9tYXAucmVtb3ZlTGF5ZXIodGhpcy5fbWFya2VyR3JvdXApLGRlbGV0ZSB0aGlzLl9tYXJrZXJHcm91cCxkZWxldGUgdGhpcy5fbWFya2Vycyl9LHVwZGF0ZU1hcmtlcnM6ZnVuY3Rpb24oKXt0aGlzLl9tYXJrZXJHcm91cC5jbGVhckxheWVycygpLHRoaXMuX2luaXRNYXJrZXJzKCl9LF9pbml0TWFya2VyczpmdW5jdGlvbigpe3RoaXMuX21hcmtlckdyb3VwfHwodGhpcy5fbWFya2VyR3JvdXA9bmV3IEwuTGF5ZXJHcm91cCksdGhpcy5fbWFya2Vycz1bXTt2YXIgdCxlLGksbyxhPXRoaXMuX2RlZmF1bHRTaGFwZSgpO2Zvcih0PTAsaT1hLmxlbmd0aDt0PGk7dCsrKW89dGhpcy5fY3JlYXRlTWFya2VyKGFbdF0sdCksby5vbihcImNsaWNrXCIsdGhpcy5fb25NYXJrZXJDbGljayx0aGlzKSxvLm9uKFwiY29udGV4dG1lbnVcIix0aGlzLl9vbkNvbnRleHRNZW51LHRoaXMpLHRoaXMuX21hcmtlcnMucHVzaChvKTt2YXIgbixzO2Zvcih0PTAsZT1pLTE7dDxpO2U9dCsrKSgwIT09dHx8TC5Qb2x5Z29uJiZ0aGlzLl9wb2x5IGluc3RhbmNlb2YgTC5Qb2x5Z29uKSYmKG49dGhpcy5fbWFya2Vyc1tlXSxzPXRoaXMuX21hcmtlcnNbdF0sdGhpcy5fY3JlYXRlTWlkZGxlTWFya2VyKG4scyksdGhpcy5fdXBkYXRlUHJldk5leHQobixzKSl9LF9jcmVhdGVNYXJrZXI6ZnVuY3Rpb24odCxlKXt2YXIgaT1uZXcgTC5NYXJrZXIuVG91Y2godCx7ZHJhZ2dhYmxlOiEwLGljb246dGhpcy5vcHRpb25zLmljb259KTtyZXR1cm4gaS5fb3JpZ0xhdExuZz10LGkuX2luZGV4PWUsaS5vbihcImRyYWdzdGFydFwiLHRoaXMuX29uTWFya2VyRHJhZ1N0YXJ0LHRoaXMpLm9uKFwiZHJhZ1wiLHRoaXMuX29uTWFya2VyRHJhZyx0aGlzKS5vbihcImRyYWdlbmRcIix0aGlzLl9maXJlRWRpdCx0aGlzKS5vbihcInRvdWNobW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlLHRoaXMpLm9uKFwidG91Y2hlbmRcIix0aGlzLl9maXJlRWRpdCx0aGlzKS5vbihcIk1TUG9pbnRlck1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx0aGlzKS5vbihcIk1TUG9pbnRlclVwXCIsdGhpcy5fZmlyZUVkaXQsdGhpcyksdGhpcy5fbWFya2VyR3JvdXAuYWRkTGF5ZXIoaSksaX0sX29uTWFya2VyRHJhZ1N0YXJ0OmZ1bmN0aW9uKCl7dGhpcy5fcG9seS5maXJlKFwiZWRpdHN0YXJ0XCIpfSxfc3BsaWNlTGF0TG5nczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX2RlZmF1bHRTaGFwZSgpLGU9W10uc3BsaWNlLmFwcGx5KHQsYXJndW1lbnRzKTtyZXR1cm4gdGhpcy5fcG9seS5fY29udmVydExhdExuZ3ModCwhMCksdGhpcy5fcG9seS5yZWRyYXcoKSxlfSxfcmVtb3ZlTWFya2VyOmZ1bmN0aW9uKHQpe3ZhciBlPXQuX2luZGV4O3RoaXMuX21hcmtlckdyb3VwLnJlbW92ZUxheWVyKHQpLHRoaXMuX21hcmtlcnMuc3BsaWNlKGUsMSksdGhpcy5fc3BsaWNlTGF0TG5ncyhlLDEpLHRoaXMuX3VwZGF0ZUluZGV4ZXMoZSwtMSksdC5vZmYoXCJkcmFnc3RhcnRcIix0aGlzLl9vbk1hcmtlckRyYWdTdGFydCx0aGlzKS5vZmYoXCJkcmFnXCIsdGhpcy5fb25NYXJrZXJEcmFnLHRoaXMpLm9mZihcImRyYWdlbmRcIix0aGlzLl9maXJlRWRpdCx0aGlzKS5vZmYoXCJ0b3VjaG1vdmVcIix0aGlzLl9vbk1hcmtlckRyYWcsdGhpcykub2ZmKFwidG91Y2hlbmRcIix0aGlzLl9maXJlRWRpdCx0aGlzKS5vZmYoXCJjbGlja1wiLHRoaXMuX29uTWFya2VyQ2xpY2ssdGhpcykub2ZmKFwiTVNQb2ludGVyTW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlLHRoaXMpLm9mZihcIk1TUG9pbnRlclVwXCIsdGhpcy5fZmlyZUVkaXQsdGhpcyl9LF9maXJlRWRpdDpmdW5jdGlvbigpe3RoaXMuX3BvbHkuZWRpdGVkPSEwLHRoaXMuX3BvbHkuZmlyZShcImVkaXRcIiksdGhpcy5fcG9seS5fbWFwLmZpcmUoTC5EcmF3LkV2ZW50LkVESVRWRVJURVgse2xheWVyczp0aGlzLl9tYXJrZXJHcm91cCxwb2x5OnRoaXMuX3BvbHl9KX0sX29uTWFya2VyRHJhZzpmdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldCxpPXRoaXMuX3BvbHksbz1MLkxhdExuZ1V0aWwuY2xvbmVMYXRMbmcoZS5fb3JpZ0xhdExuZyk7aWYoTC5leHRlbmQoZS5fb3JpZ0xhdExuZyxlLl9sYXRsbmcpLGkub3B0aW9ucy5wb2x5KXt2YXIgYT1pLl9tYXAuX2VkaXRUb29sdGlwO2lmKCFpLm9wdGlvbnMucG9seS5hbGxvd0ludGVyc2VjdGlvbiYmaS5pbnRlcnNlY3RzKCkpe0wuZXh0ZW5kKGUuX29yaWdMYXRMbmcsbyksZS5zZXRMYXRMbmcobyk7dmFyIG49aS5vcHRpb25zLmNvbG9yO2kuc2V0U3R5bGUoe2NvbG9yOnRoaXMub3B0aW9ucy5kcmF3RXJyb3IuY29sb3J9KSxhJiZhLnVwZGF0ZUNvbnRlbnQoe3RleHQ6TC5kcmF3TG9jYWwuZHJhdy5oYW5kbGVycy5wb2x5bGluZS5lcnJvcn0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnNldFN0eWxlKHtjb2xvcjpufSksYSYmYS51cGRhdGVDb250ZW50KHt0ZXh0OkwuZHJhd0xvY2FsLmVkaXQuaGFuZGxlcnMuZWRpdC50b29sdGlwLnRleHQsc3VidGV4dDpMLmRyYXdMb2NhbC5lZGl0LmhhbmRsZXJzLmVkaXQudG9vbHRpcC5zdWJ0ZXh0fSl9LDFlMyl9fWUuX21pZGRsZUxlZnQmJmUuX21pZGRsZUxlZnQuc2V0TGF0TG5nKHRoaXMuX2dldE1pZGRsZUxhdExuZyhlLl9wcmV2LGUpKSxlLl9taWRkbGVSaWdodCYmZS5fbWlkZGxlUmlnaHQuc2V0TGF0TG5nKHRoaXMuX2dldE1pZGRsZUxhdExuZyhlLGUuX25leHQpKSx0aGlzLl9wb2x5Ll9ib3VuZHMuX3NvdXRoV2VzdD1MLmxhdExuZygxLzAsMS8wKSx0aGlzLl9wb2x5Ll9ib3VuZHMuX25vcnRoRWFzdD1MLmxhdExuZygtMS8wLC0xLzApO3ZhciBzPXRoaXMuX3BvbHkuZ2V0TGF0TG5ncygpO3RoaXMuX3BvbHkuX2NvbnZlcnRMYXRMbmdzKHMsITApLHRoaXMuX3BvbHkucmVkcmF3KCksdGhpcy5fcG9seS5maXJlKFwiZWRpdGRyYWdcIil9LF9vbk1hcmtlckNsaWNrOmZ1bmN0aW9uKHQpe3ZhciBlPUwuUG9seWdvbiYmdGhpcy5fcG9seSBpbnN0YW5jZW9mIEwuUG9seWdvbj80OjMsaT10LnRhcmdldDt0aGlzLl9kZWZhdWx0U2hhcGUoKS5sZW5ndGg8ZXx8KHRoaXMuX3JlbW92ZU1hcmtlcihpKSx0aGlzLl91cGRhdGVQcmV2TmV4dChpLl9wcmV2LGkuX25leHQpLGkuX21pZGRsZUxlZnQmJnRoaXMuX21hcmtlckdyb3VwLnJlbW92ZUxheWVyKGkuX21pZGRsZUxlZnQpLGkuX21pZGRsZVJpZ2h0JiZ0aGlzLl9tYXJrZXJHcm91cC5yZW1vdmVMYXllcihpLl9taWRkbGVSaWdodCksaS5fcHJldiYmaS5fbmV4dD90aGlzLl9jcmVhdGVNaWRkbGVNYXJrZXIoaS5fcHJldixpLl9uZXh0KTppLl9wcmV2P2kuX25leHR8fChpLl9wcmV2Ll9taWRkbGVSaWdodD1udWxsKTppLl9uZXh0Ll9taWRkbGVMZWZ0PW51bGwsdGhpcy5fZmlyZUVkaXQoKSl9LF9vbkNvbnRleHRNZW51OmZ1bmN0aW9uKHQpe3ZhciBlPXQudGFyZ2V0O3RoaXMuX3BvbHk7dGhpcy5fcG9seS5fbWFwLmZpcmUoTC5EcmF3LkV2ZW50Lk1BUktFUkNPTlRFWFQse21hcmtlcjplLGxheWVyczp0aGlzLl9tYXJrZXJHcm91cCxwb2x5OnRoaXMuX3BvbHl9KSxMLkRvbUV2ZW50LnN0b3BQcm9wYWdhdGlvbn0sX29uVG91Y2hNb3ZlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX21hcC5tb3VzZUV2ZW50VG9MYXllclBvaW50KHQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdKSxpPXRoaXMuX21hcC5sYXllclBvaW50VG9MYXRMbmcoZSksbz10LnRhcmdldDtMLmV4dGVuZChvLl9vcmlnTGF0TG5nLGkpLG8uX21pZGRsZUxlZnQmJm8uX21pZGRsZUxlZnQuc2V0TGF0TG5nKHRoaXMuX2dldE1pZGRsZUxhdExuZyhvLl9wcmV2LG8pKSxvLl9taWRkbGVSaWdodCYmby5fbWlkZGxlUmlnaHQuc2V0TGF0TG5nKHRoaXMuX2dldE1pZGRsZUxhdExuZyhvLG8uX25leHQpKSx0aGlzLl9wb2x5LnJlZHJhdygpLHRoaXMudXBkYXRlTWFya2VycygpfSxfdXBkYXRlSW5kZXhlczpmdW5jdGlvbih0LGUpe3RoaXMuX21hcmtlckdyb3VwLmVhY2hMYXllcihmdW5jdGlvbihpKXtpLl9pbmRleD50JiYoaS5faW5kZXgrPWUpfSl9LF9jcmVhdGVNaWRkbGVNYXJrZXI6ZnVuY3Rpb24odCxlKXt2YXIgaSxvLGEsbj10aGlzLl9nZXRNaWRkbGVMYXRMbmcodCxlKSxzPXRoaXMuX2NyZWF0ZU1hcmtlcihuKTtzLnNldE9wYWNpdHkoLjYpLHQuX21pZGRsZVJpZ2h0PWUuX21pZGRsZUxlZnQ9cyxvPWZ1bmN0aW9uKCl7cy5vZmYoXCJ0b3VjaG1vdmVcIixvLHRoaXMpO3ZhciBhPWUuX2luZGV4O3MuX2luZGV4PWEscy5vZmYoXCJjbGlja1wiLGksdGhpcykub24oXCJjbGlja1wiLHRoaXMuX29uTWFya2VyQ2xpY2ssdGhpcyksbi5sYXQ9cy5nZXRMYXRMbmcoKS5sYXQsbi5sbmc9cy5nZXRMYXRMbmcoKS5sbmcsdGhpcy5fc3BsaWNlTGF0TG5ncyhhLDAsbiksdGhpcy5fbWFya2Vycy5zcGxpY2UoYSwwLHMpLHMuc2V0T3BhY2l0eSgxKSx0aGlzLl91cGRhdGVJbmRleGVzKGEsMSksZS5faW5kZXgrKyx0aGlzLl91cGRhdGVQcmV2TmV4dCh0LHMpLHRoaXMuX3VwZGF0ZVByZXZOZXh0KHMsZSksdGhpcy5fcG9seS5maXJlKFwiZWRpdHN0YXJ0XCIpfSxhPWZ1bmN0aW9uKCl7cy5vZmYoXCJkcmFnc3RhcnRcIixvLHRoaXMpLHMub2ZmKFwiZHJhZ2VuZFwiLGEsdGhpcykscy5vZmYoXCJ0b3VjaG1vdmVcIixvLHRoaXMpLHRoaXMuX2NyZWF0ZU1pZGRsZU1hcmtlcih0LHMpLHRoaXMuX2NyZWF0ZU1pZGRsZU1hcmtlcihzLGUpfSxpPWZ1bmN0aW9uKCl7by5jYWxsKHRoaXMpLGEuY2FsbCh0aGlzKSx0aGlzLl9maXJlRWRpdCgpfSxzLm9uKFwiY2xpY2tcIixpLHRoaXMpLm9uKFwiZHJhZ3N0YXJ0XCIsbyx0aGlzKS5vbihcImRyYWdlbmRcIixhLHRoaXMpLm9uKFwidG91Y2htb3ZlXCIsbyx0aGlzKSx0aGlzLl9tYXJrZXJHcm91cC5hZGRMYXllcihzKX0sX3VwZGF0ZVByZXZOZXh0OmZ1bmN0aW9uKHQsZSl7dCYmKHQuX25leHQ9ZSksZSYmKGUuX3ByZXY9dCl9LF9nZXRNaWRkbGVMYXRMbmc6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLl9wb2x5Ll9tYXAsbz1pLnByb2plY3QodC5nZXRMYXRMbmcoKSksYT1pLnByb2plY3QoZS5nZXRMYXRMbmcoKSk7cmV0dXJuIGkudW5wcm9qZWN0KG8uX2FkZChhKS5fZGl2aWRlQnkoMikpfX0pLEwuUG9seWxpbmUuYWRkSW5pdEhvb2soZnVuY3Rpb24oKXt0aGlzLmVkaXRpbmd8fChMLkVkaXQuUG9seSYmKHRoaXMuZWRpdGluZz1uZXcgTC5FZGl0LlBvbHkodGhpcyksdGhpcy5vcHRpb25zLmVkaXRhYmxlJiZ0aGlzLmVkaXRpbmcuZW5hYmxlKCkpLHRoaXMub24oXCJhZGRcIixmdW5jdGlvbigpe3RoaXMuZWRpdGluZyYmdGhpcy5lZGl0aW5nLmVuYWJsZWQoKSYmdGhpcy5lZGl0aW5nLmFkZEhvb2tzKCl9KSx0aGlzLm9uKFwicmVtb3ZlXCIsZnVuY3Rpb24oKXt0aGlzLmVkaXRpbmcmJnRoaXMuZWRpdGluZy5lbmFibGVkKCkmJnRoaXMuZWRpdGluZy5yZW1vdmVIb29rcygpfSkpfSksTC5FZGl0PUwuRWRpdHx8e30sTC5FZGl0LlNpbXBsZVNoYXBlPUwuSGFuZGxlci5leHRlbmQoe29wdGlvbnM6e21vdmVJY29uOm5ldyBMLkRpdkljb24oe2ljb25TaXplOm5ldyBMLlBvaW50KDgsOCksY2xhc3NOYW1lOlwibGVhZmxldC1kaXYtaWNvbiBsZWFmbGV0LWVkaXRpbmctaWNvbiBsZWFmbGV0LWVkaXQtbW92ZVwifSkscmVzaXplSWNvbjpuZXcgTC5EaXZJY29uKHtpY29uU2l6ZTpuZXcgTC5Qb2ludCg4LDgpLFxuY2xhc3NOYW1lOlwibGVhZmxldC1kaXYtaWNvbiBsZWFmbGV0LWVkaXRpbmctaWNvbiBsZWFmbGV0LWVkaXQtcmVzaXplXCJ9KSx0b3VjaE1vdmVJY29uOm5ldyBMLkRpdkljb24oe2ljb25TaXplOm5ldyBMLlBvaW50KDIwLDIwKSxjbGFzc05hbWU6XCJsZWFmbGV0LWRpdi1pY29uIGxlYWZsZXQtZWRpdGluZy1pY29uIGxlYWZsZXQtZWRpdC1tb3ZlIGxlYWZsZXQtdG91Y2gtaWNvblwifSksdG91Y2hSZXNpemVJY29uOm5ldyBMLkRpdkljb24oe2ljb25TaXplOm5ldyBMLlBvaW50KDIwLDIwKSxjbGFzc05hbWU6XCJsZWFmbGV0LWRpdi1pY29uIGxlYWZsZXQtZWRpdGluZy1pY29uIGxlYWZsZXQtZWRpdC1yZXNpemUgbGVhZmxldC10b3VjaC1pY29uXCJ9KX0saW5pdGlhbGl6ZTpmdW5jdGlvbih0LGUpe0wuQnJvd3Nlci50b3VjaCYmKHRoaXMub3B0aW9ucy5tb3ZlSWNvbj10aGlzLm9wdGlvbnMudG91Y2hNb3ZlSWNvbix0aGlzLm9wdGlvbnMucmVzaXplSWNvbj10aGlzLm9wdGlvbnMudG91Y2hSZXNpemVJY29uKSx0aGlzLl9zaGFwZT10LEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsZSl9LGFkZEhvb2tzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fc2hhcGU7dGhpcy5fc2hhcGUuX21hcCYmKHRoaXMuX21hcD10aGlzLl9zaGFwZS5fbWFwLHQuc2V0U3R5bGUodC5vcHRpb25zLmVkaXRpbmcpLHQuX21hcCYmKHRoaXMuX21hcD10Ll9tYXAsdGhpcy5fbWFya2VyR3JvdXB8fHRoaXMuX2luaXRNYXJrZXJzKCksdGhpcy5fbWFwLmFkZExheWVyKHRoaXMuX21hcmtlckdyb3VwKSkpfSxyZW1vdmVIb29rczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3NoYXBlO2lmKHQuc2V0U3R5bGUodC5vcHRpb25zLm9yaWdpbmFsKSx0Ll9tYXApe3RoaXMuX3VuYmluZE1hcmtlcih0aGlzLl9tb3ZlTWFya2VyKTtmb3IodmFyIGU9MCxpPXRoaXMuX3Jlc2l6ZU1hcmtlcnMubGVuZ3RoO2U8aTtlKyspdGhpcy5fdW5iaW5kTWFya2VyKHRoaXMuX3Jlc2l6ZU1hcmtlcnNbZV0pO3RoaXMuX3Jlc2l6ZU1hcmtlcnM9bnVsbCx0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5fbWFya2VyR3JvdXApLGRlbGV0ZSB0aGlzLl9tYXJrZXJHcm91cH10aGlzLl9tYXA9bnVsbH0sdXBkYXRlTWFya2VyczpmdW5jdGlvbigpe3RoaXMuX21hcmtlckdyb3VwLmNsZWFyTGF5ZXJzKCksdGhpcy5faW5pdE1hcmtlcnMoKX0sX2luaXRNYXJrZXJzOmZ1bmN0aW9uKCl7dGhpcy5fbWFya2VyR3JvdXB8fCh0aGlzLl9tYXJrZXJHcm91cD1uZXcgTC5MYXllckdyb3VwKSx0aGlzLl9jcmVhdGVNb3ZlTWFya2VyKCksdGhpcy5fY3JlYXRlUmVzaXplTWFya2VyKCl9LF9jcmVhdGVNb3ZlTWFya2VyOmZ1bmN0aW9uKCl7fSxfY3JlYXRlUmVzaXplTWFya2VyOmZ1bmN0aW9uKCl7fSxfY3JlYXRlTWFya2VyOmZ1bmN0aW9uKHQsZSl7dmFyIGk9bmV3IEwuTWFya2VyLlRvdWNoKHQse2RyYWdnYWJsZTohMCxpY29uOmUsekluZGV4T2Zmc2V0OjEwfSk7cmV0dXJuIHRoaXMuX2JpbmRNYXJrZXIoaSksdGhpcy5fbWFya2VyR3JvdXAuYWRkTGF5ZXIoaSksaX0sX2JpbmRNYXJrZXI6ZnVuY3Rpb24odCl7dC5vbihcImRyYWdzdGFydFwiLHRoaXMuX29uTWFya2VyRHJhZ1N0YXJ0LHRoaXMpLm9uKFwiZHJhZ1wiLHRoaXMuX29uTWFya2VyRHJhZyx0aGlzKS5vbihcImRyYWdlbmRcIix0aGlzLl9vbk1hcmtlckRyYWdFbmQsdGhpcykub24oXCJ0b3VjaHN0YXJ0XCIsdGhpcy5fb25Ub3VjaFN0YXJ0LHRoaXMpLm9uKFwidG91Y2htb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUsdGhpcykub24oXCJNU1BvaW50ZXJNb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUsdGhpcykub24oXCJ0b3VjaGVuZFwiLHRoaXMuX29uVG91Y2hFbmQsdGhpcykub24oXCJNU1BvaW50ZXJVcFwiLHRoaXMuX29uVG91Y2hFbmQsdGhpcyl9LF91bmJpbmRNYXJrZXI6ZnVuY3Rpb24odCl7dC5vZmYoXCJkcmFnc3RhcnRcIix0aGlzLl9vbk1hcmtlckRyYWdTdGFydCx0aGlzKS5vZmYoXCJkcmFnXCIsdGhpcy5fb25NYXJrZXJEcmFnLHRoaXMpLm9mZihcImRyYWdlbmRcIix0aGlzLl9vbk1hcmtlckRyYWdFbmQsdGhpcykub2ZmKFwidG91Y2hzdGFydFwiLHRoaXMuX29uVG91Y2hTdGFydCx0aGlzKS5vZmYoXCJ0b3VjaG1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx0aGlzKS5vZmYoXCJNU1BvaW50ZXJNb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUsdGhpcykub2ZmKFwidG91Y2hlbmRcIix0aGlzLl9vblRvdWNoRW5kLHRoaXMpLm9mZihcIk1TUG9pbnRlclVwXCIsdGhpcy5fb25Ub3VjaEVuZCx0aGlzKX0sX29uTWFya2VyRHJhZ1N0YXJ0OmZ1bmN0aW9uKHQpe3QudGFyZ2V0LnNldE9wYWNpdHkoMCksdGhpcy5fc2hhcGUuZmlyZShcImVkaXRzdGFydFwiKX0sX2ZpcmVFZGl0OmZ1bmN0aW9uKCl7dGhpcy5fc2hhcGUuZWRpdGVkPSEwLHRoaXMuX3NoYXBlLmZpcmUoXCJlZGl0XCIpfSxfb25NYXJrZXJEcmFnOmZ1bmN0aW9uKHQpe3ZhciBlPXQudGFyZ2V0LGk9ZS5nZXRMYXRMbmcoKTtlPT09dGhpcy5fbW92ZU1hcmtlcj90aGlzLl9tb3ZlKGkpOnRoaXMuX3Jlc2l6ZShpKSx0aGlzLl9zaGFwZS5yZWRyYXcoKSx0aGlzLl9zaGFwZS5maXJlKFwiZWRpdGRyYWdcIil9LF9vbk1hcmtlckRyYWdFbmQ6ZnVuY3Rpb24odCl7dC50YXJnZXQuc2V0T3BhY2l0eSgxKSx0aGlzLl9maXJlRWRpdCgpfSxfb25Ub3VjaFN0YXJ0OmZ1bmN0aW9uKHQpe2lmKEwuRWRpdC5TaW1wbGVTaGFwZS5wcm90b3R5cGUuX29uTWFya2VyRHJhZ1N0YXJ0LmNhbGwodGhpcyx0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl9nZXRDb3JuZXJzKXt2YXIgZT10aGlzLl9nZXRDb3JuZXJzKCksaT10LnRhcmdldCxvPWkuX2Nvcm5lckluZGV4O2kuc2V0T3BhY2l0eSgwKSx0aGlzLl9vcHBvc2l0ZUNvcm5lcj1lWyhvKzIpJTRdLHRoaXMuX3RvZ2dsZUNvcm5lck1hcmtlcnMoMCxvKX10aGlzLl9zaGFwZS5maXJlKFwiZWRpdHN0YXJ0XCIpfSxfb25Ub3VjaE1vdmU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fbWFwLm1vdXNlRXZlbnRUb0xheWVyUG9pbnQodC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0pLGk9dGhpcy5fbWFwLmxheWVyUG9pbnRUb0xhdExuZyhlKTtyZXR1cm4gdC50YXJnZXQ9PT10aGlzLl9tb3ZlTWFya2VyP3RoaXMuX21vdmUoaSk6dGhpcy5fcmVzaXplKGkpLHRoaXMuX3NoYXBlLnJlZHJhdygpLCExfSxfb25Ub3VjaEVuZDpmdW5jdGlvbih0KXt0LnRhcmdldC5zZXRPcGFjaXR5KDEpLHRoaXMudXBkYXRlTWFya2VycygpLHRoaXMuX2ZpcmVFZGl0KCl9LF9tb3ZlOmZ1bmN0aW9uKCl7fSxfcmVzaXplOmZ1bmN0aW9uKCl7fX0pLEwuRWRpdD1MLkVkaXR8fHt9LEwuRWRpdC5SZWN0YW5nbGU9TC5FZGl0LlNpbXBsZVNoYXBlLmV4dGVuZCh7X2NyZWF0ZU1vdmVNYXJrZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9zaGFwZS5nZXRCb3VuZHMoKSxlPXQuZ2V0Q2VudGVyKCk7dGhpcy5fbW92ZU1hcmtlcj10aGlzLl9jcmVhdGVNYXJrZXIoZSx0aGlzLm9wdGlvbnMubW92ZUljb24pfSxfY3JlYXRlUmVzaXplTWFya2VyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZ2V0Q29ybmVycygpO3RoaXMuX3Jlc2l6ZU1hcmtlcnM9W107Zm9yKHZhciBlPTAsaT10Lmxlbmd0aDtlPGk7ZSsrKXRoaXMuX3Jlc2l6ZU1hcmtlcnMucHVzaCh0aGlzLl9jcmVhdGVNYXJrZXIodFtlXSx0aGlzLm9wdGlvbnMucmVzaXplSWNvbikpLHRoaXMuX3Jlc2l6ZU1hcmtlcnNbZV0uX2Nvcm5lckluZGV4PWV9LF9vbk1hcmtlckRyYWdTdGFydDpmdW5jdGlvbih0KXtMLkVkaXQuU2ltcGxlU2hhcGUucHJvdG90eXBlLl9vbk1hcmtlckRyYWdTdGFydC5jYWxsKHRoaXMsdCk7dmFyIGU9dGhpcy5fZ2V0Q29ybmVycygpLGk9dC50YXJnZXQsbz1pLl9jb3JuZXJJbmRleDt0aGlzLl9vcHBvc2l0ZUNvcm5lcj1lWyhvKzIpJTRdLHRoaXMuX3RvZ2dsZUNvcm5lck1hcmtlcnMoMCxvKX0sX29uTWFya2VyRHJhZ0VuZDpmdW5jdGlvbih0KXt2YXIgZSxpLG89dC50YXJnZXQ7bz09PXRoaXMuX21vdmVNYXJrZXImJihlPXRoaXMuX3NoYXBlLmdldEJvdW5kcygpLGk9ZS5nZXRDZW50ZXIoKSxvLnNldExhdExuZyhpKSksdGhpcy5fdG9nZ2xlQ29ybmVyTWFya2VycygxKSx0aGlzLl9yZXBvc2l0aW9uQ29ybmVyTWFya2VycygpLEwuRWRpdC5TaW1wbGVTaGFwZS5wcm90b3R5cGUuX29uTWFya2VyRHJhZ0VuZC5jYWxsKHRoaXMsdCl9LF9tb3ZlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxpPXRoaXMuX3NoYXBlLl9kZWZhdWx0U2hhcGU/dGhpcy5fc2hhcGUuX2RlZmF1bHRTaGFwZSgpOnRoaXMuX3NoYXBlLmdldExhdExuZ3MoKSxvPXRoaXMuX3NoYXBlLmdldEJvdW5kcygpLGE9by5nZXRDZW50ZXIoKSxuPVtdLHM9MCxyPWkubGVuZ3RoO3M8cjtzKyspZT1baVtzXS5sYXQtYS5sYXQsaVtzXS5sbmctYS5sbmddLG4ucHVzaChbdC5sYXQrZVswXSx0LmxuZytlWzFdXSk7dGhpcy5fc2hhcGUuc2V0TGF0TG5ncyhuKSx0aGlzLl9yZXBvc2l0aW9uQ29ybmVyTWFya2VycygpLHRoaXMuX21hcC5maXJlKEwuRHJhdy5FdmVudC5FRElUTU9WRSx7bGF5ZXI6dGhpcy5fc2hhcGV9KX0sX3Jlc2l6ZTpmdW5jdGlvbih0KXt2YXIgZTt0aGlzLl9zaGFwZS5zZXRCb3VuZHMoTC5sYXRMbmdCb3VuZHModCx0aGlzLl9vcHBvc2l0ZUNvcm5lcikpLGU9dGhpcy5fc2hhcGUuZ2V0Qm91bmRzKCksdGhpcy5fbW92ZU1hcmtlci5zZXRMYXRMbmcoZS5nZXRDZW50ZXIoKSksdGhpcy5fbWFwLmZpcmUoTC5EcmF3LkV2ZW50LkVESVRSRVNJWkUse2xheWVyOnRoaXMuX3NoYXBlfSl9LF9nZXRDb3JuZXJzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fc2hhcGUuZ2V0Qm91bmRzKCk7cmV0dXJuW3QuZ2V0Tm9ydGhXZXN0KCksdC5nZXROb3J0aEVhc3QoKSx0LmdldFNvdXRoRWFzdCgpLHQuZ2V0U291dGhXZXN0KCldfSxfdG9nZ2xlQ29ybmVyTWFya2VyczpmdW5jdGlvbih0KXtmb3IodmFyIGU9MCxpPXRoaXMuX3Jlc2l6ZU1hcmtlcnMubGVuZ3RoO2U8aTtlKyspdGhpcy5fcmVzaXplTWFya2Vyc1tlXS5zZXRPcGFjaXR5KHQpfSxfcmVwb3NpdGlvbkNvcm5lck1hcmtlcnM6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5fZ2V0Q29ybmVycygpLGU9MCxpPXRoaXMuX3Jlc2l6ZU1hcmtlcnMubGVuZ3RoO2U8aTtlKyspdGhpcy5fcmVzaXplTWFya2Vyc1tlXS5zZXRMYXRMbmcodFtlXSl9fSksTC5SZWN0YW5nbGUuYWRkSW5pdEhvb2soZnVuY3Rpb24oKXtMLkVkaXQuUmVjdGFuZ2xlJiYodGhpcy5lZGl0aW5nPW5ldyBMLkVkaXQuUmVjdGFuZ2xlKHRoaXMpLHRoaXMub3B0aW9ucy5lZGl0YWJsZSYmdGhpcy5lZGl0aW5nLmVuYWJsZSgpKX0pLEwuRWRpdD1MLkVkaXR8fHt9LEwuRWRpdC5DaXJjbGVNYXJrZXI9TC5FZGl0LlNpbXBsZVNoYXBlLmV4dGVuZCh7X2NyZWF0ZU1vdmVNYXJrZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9zaGFwZS5nZXRMYXRMbmcoKTt0aGlzLl9tb3ZlTWFya2VyPXRoaXMuX2NyZWF0ZU1hcmtlcih0LHRoaXMub3B0aW9ucy5tb3ZlSWNvbil9LF9jcmVhdGVSZXNpemVNYXJrZXI6ZnVuY3Rpb24oKXt0aGlzLl9yZXNpemVNYXJrZXJzPVtdfSxfbW92ZTpmdW5jdGlvbih0KXtpZih0aGlzLl9yZXNpemVNYXJrZXJzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0UmVzaXplTWFya2VyUG9pbnQodCk7dGhpcy5fcmVzaXplTWFya2Vyc1swXS5zZXRMYXRMbmcoZSl9dGhpcy5fc2hhcGUuc2V0TGF0TG5nKHQpLHRoaXMuX21hcC5maXJlKEwuRHJhdy5FdmVudC5FRElUTU9WRSx7bGF5ZXI6dGhpcy5fc2hhcGV9KX19KSxMLkNpcmNsZU1hcmtlci5hZGRJbml0SG9vayhmdW5jdGlvbigpe0wuRWRpdC5DaXJjbGVNYXJrZXImJih0aGlzLmVkaXRpbmc9bmV3IEwuRWRpdC5DaXJjbGVNYXJrZXIodGhpcyksdGhpcy5vcHRpb25zLmVkaXRhYmxlJiZ0aGlzLmVkaXRpbmcuZW5hYmxlKCkpLHRoaXMub24oXCJhZGRcIixmdW5jdGlvbigpe3RoaXMuZWRpdGluZyYmdGhpcy5lZGl0aW5nLmVuYWJsZWQoKSYmdGhpcy5lZGl0aW5nLmFkZEhvb2tzKCl9KSx0aGlzLm9uKFwicmVtb3ZlXCIsZnVuY3Rpb24oKXt0aGlzLmVkaXRpbmcmJnRoaXMuZWRpdGluZy5lbmFibGVkKCkmJnRoaXMuZWRpdGluZy5yZW1vdmVIb29rcygpfSl9KSxMLkVkaXQ9TC5FZGl0fHx7fSxMLkVkaXQuQ2lyY2xlPUwuRWRpdC5DaXJjbGVNYXJrZXIuZXh0ZW5kKHtfY3JlYXRlUmVzaXplTWFya2VyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fc2hhcGUuZ2V0TGF0TG5nKCksZT10aGlzLl9nZXRSZXNpemVNYXJrZXJQb2ludCh0KTt0aGlzLl9yZXNpemVNYXJrZXJzPVtdLHRoaXMuX3Jlc2l6ZU1hcmtlcnMucHVzaCh0aGlzLl9jcmVhdGVNYXJrZXIoZSx0aGlzLm9wdGlvbnMucmVzaXplSWNvbikpfSxfZ2V0UmVzaXplTWFya2VyUG9pbnQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fc2hhcGUuX3JhZGl1cypNYXRoLmNvcyhNYXRoLlBJLzQpLGk9dGhpcy5fbWFwLnByb2plY3QodCk7cmV0dXJuIHRoaXMuX21hcC51bnByb2plY3QoW2kueCtlLGkueS1lXSl9LF9yZXNpemU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fbW92ZU1hcmtlci5nZXRMYXRMbmcoKTtMLkdlb21ldHJ5VXRpbC5pc1ZlcnNpb24wN3goKT9yYWRpdXM9ZS5kaXN0YW5jZVRvKHQpOnJhZGl1cz10aGlzLl9tYXAuZGlzdGFuY2UoZSx0KSx0aGlzLl9zaGFwZS5zZXRSYWRpdXMocmFkaXVzKSx0aGlzLl9tYXAuZWRpdFRvb2x0aXAmJnRoaXMuX21hcC5fZWRpdFRvb2x0aXAudXBkYXRlQ29udGVudCh7dGV4dDpMLmRyYXdMb2NhbC5lZGl0LmhhbmRsZXJzLmVkaXQudG9vbHRpcC5zdWJ0ZXh0K1wiPGJyIC8+XCIrTC5kcmF3TG9jYWwuZWRpdC5oYW5kbGVycy5lZGl0LnRvb2x0aXAudGV4dCxzdWJ0ZXh0OkwuZHJhd0xvY2FsLmRyYXcuaGFuZGxlcnMuY2lyY2xlLnJhZGl1cytcIjogXCIrTC5HZW9tZXRyeVV0aWwucmVhZGFibGVEaXN0YW5jZShyYWRpdXMsITAsdGhpcy5vcHRpb25zLmZlZXQsdGhpcy5vcHRpb25zLm5hdXRpYyl9KSx0aGlzLl9zaGFwZS5zZXRSYWRpdXMocmFkaXVzKSx0aGlzLl9tYXAuZmlyZShMLkRyYXcuRXZlbnQuRURJVFJFU0laRSx7bGF5ZXI6dGhpcy5fc2hhcGV9KX19KSxMLkNpcmNsZS5hZGRJbml0SG9vayhmdW5jdGlvbigpe0wuRWRpdC5DaXJjbGUmJih0aGlzLmVkaXRpbmc9bmV3IEwuRWRpdC5DaXJjbGUodGhpcyksdGhpcy5vcHRpb25zLmVkaXRhYmxlJiZ0aGlzLmVkaXRpbmcuZW5hYmxlKCkpfSksTC5NYXAubWVyZ2VPcHRpb25zKHt0b3VjaEV4dGVuZDohMH0pLEwuTWFwLlRvdWNoRXh0ZW5kPUwuSGFuZGxlci5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24odCl7dGhpcy5fbWFwPXQsdGhpcy5fY29udGFpbmVyPXQuX2NvbnRhaW5lcix0aGlzLl9wYW5lPXQuX3BhbmVzLm92ZXJsYXlQYW5lfSxhZGRIb29rczpmdW5jdGlvbigpe0wuRG9tRXZlbnQub24odGhpcy5fY29udGFpbmVyLFwidG91Y2hzdGFydFwiLHRoaXMuX29uVG91Y2hTdGFydCx0aGlzKSxMLkRvbUV2ZW50Lm9uKHRoaXMuX2NvbnRhaW5lcixcInRvdWNoZW5kXCIsdGhpcy5fb25Ub3VjaEVuZCx0aGlzKSxMLkRvbUV2ZW50Lm9uKHRoaXMuX2NvbnRhaW5lcixcInRvdWNobW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlLHRoaXMpLHRoaXMuX2RldGVjdElFKCk/KEwuRG9tRXZlbnQub24odGhpcy5fY29udGFpbmVyLFwiTVNQb2ludGVyRG93blwiLHRoaXMuX29uVG91Y2hTdGFydCx0aGlzKSxMLkRvbUV2ZW50Lm9uKHRoaXMuX2NvbnRhaW5lcixcIk1TUG9pbnRlclVwXCIsdGhpcy5fb25Ub3VjaEVuZCx0aGlzKSxMLkRvbUV2ZW50Lm9uKHRoaXMuX2NvbnRhaW5lcixcIk1TUG9pbnRlck1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx0aGlzKSxMLkRvbUV2ZW50Lm9uKHRoaXMuX2NvbnRhaW5lcixcIk1TUG9pbnRlckNhbmNlbFwiLHRoaXMuX29uVG91Y2hDYW5jZWwsdGhpcykpOihMLkRvbUV2ZW50Lm9uKHRoaXMuX2NvbnRhaW5lcixcInRvdWNoY2FuY2VsXCIsdGhpcy5fb25Ub3VjaENhbmNlbCx0aGlzKSxMLkRvbUV2ZW50Lm9uKHRoaXMuX2NvbnRhaW5lcixcInRvdWNobGVhdmVcIix0aGlzLl9vblRvdWNoTGVhdmUsdGhpcykpfSxyZW1vdmVIb29rczpmdW5jdGlvbigpe0wuRG9tRXZlbnQub2ZmKHRoaXMuX2NvbnRhaW5lcixcInRvdWNoc3RhcnRcIix0aGlzLl9vblRvdWNoU3RhcnQsdGhpcyksTC5Eb21FdmVudC5vZmYodGhpcy5fY29udGFpbmVyLFwidG91Y2hlbmRcIix0aGlzLl9vblRvdWNoRW5kLHRoaXMpLEwuRG9tRXZlbnQub2ZmKHRoaXMuX2NvbnRhaW5lcixcInRvdWNobW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlLHRoaXMpLHRoaXMuX2RldGVjdElFKCk/KEwuRG9tRXZlbnQub2ZmKHRoaXMuX2NvbnRhaW5lcixcIk1TUG9pbnRlckRvd25cIix0aGlzLl9vblRvdWNoU3RhcnQsdGhpcyksTC5Eb21FdmVudC5vZmYodGhpcy5fY29udGFpbmVyLFwiTVNQb2ludGVyVXBcIix0aGlzLl9vblRvdWNoRW5kLHRoaXMpLEwuRG9tRXZlbnQub2ZmKHRoaXMuX2NvbnRhaW5lcixcIk1TUG9pbnRlck1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx0aGlzKSxMLkRvbUV2ZW50Lm9mZih0aGlzLl9jb250YWluZXIsXCJNU1BvaW50ZXJDYW5jZWxcIix0aGlzLl9vblRvdWNoQ2FuY2VsLHRoaXMpKTooTC5Eb21FdmVudC5vZmYodGhpcy5fY29udGFpbmVyLFwidG91Y2hjYW5jZWxcIix0aGlzLl9vblRvdWNoQ2FuY2VsLHRoaXMpLEwuRG9tRXZlbnQub2ZmKHRoaXMuX2NvbnRhaW5lcixcInRvdWNobGVhdmVcIix0aGlzLl9vblRvdWNoTGVhdmUsdGhpcykpfSxfdG91Y2hFdmVudDpmdW5jdGlvbih0LGUpe3ZhciBpPXt9O2lmKHZvaWQgMCE9PXQudG91Y2hlcyl7aWYoIXQudG91Y2hlcy5sZW5ndGgpcmV0dXJuO2k9dC50b3VjaGVzWzBdfWVsc2V7aWYoXCJ0b3VjaFwiIT09dC5wb2ludGVyVHlwZSlyZXR1cm47aWYoaT10LCF0aGlzLl9maWx0ZXJDbGljayh0KSlyZXR1cm59dmFyIG89dGhpcy5fbWFwLm1vdXNlRXZlbnRUb0NvbnRhaW5lclBvaW50KGkpLGE9dGhpcy5fbWFwLm1vdXNlRXZlbnRUb0xheWVyUG9pbnQoaSksbj10aGlzLl9tYXAubGF5ZXJQb2ludFRvTGF0TG5nKGEpO3RoaXMuX21hcC5maXJlKGUse2xhdGxuZzpuLGxheWVyUG9pbnQ6YSxjb250YWluZXJQb2ludDpvLHBhZ2VYOmkucGFnZVgscGFnZVk6aS5wYWdlWSxvcmlnaW5hbEV2ZW50OnR9KX0sX2ZpbHRlckNsaWNrOmZ1bmN0aW9uKHQpe3ZhciBlPXQudGltZVN0YW1wfHx0Lm9yaWdpbmFsRXZlbnQudGltZVN0YW1wLGk9TC5Eb21FdmVudC5fbGFzdENsaWNrJiZlLUwuRG9tRXZlbnQuX2xhc3RDbGljaztyZXR1cm4gaSYmaT4xMDAmJmk8NTAwfHx0LnRhcmdldC5fc2ltdWxhdGVkQ2xpY2smJiF0Ll9zaW11bGF0ZWQ/KEwuRG9tRXZlbnQuc3RvcCh0KSwhMSk6KEwuRG9tRXZlbnQuX2xhc3RDbGljaz1lLCEwKX0sX29uVG91Y2hTdGFydDpmdW5jdGlvbih0KXtpZih0aGlzLl9tYXAuX2xvYWRlZCl7dGhpcy5fdG91Y2hFdmVudCh0LFwidG91Y2hzdGFydFwiKX19LF9vblRvdWNoRW5kOmZ1bmN0aW9uKHQpe2lmKHRoaXMuX21hcC5fbG9hZGVkKXt0aGlzLl90b3VjaEV2ZW50KHQsXCJ0b3VjaGVuZFwiKX19LF9vblRvdWNoQ2FuY2VsOmZ1bmN0aW9uKHQpe2lmKHRoaXMuX21hcC5fbG9hZGVkKXt2YXIgZT1cInRvdWNoY2FuY2VsXCI7dGhpcy5fZGV0ZWN0SUUoKSYmKGU9XCJwb2ludGVyY2FuY2VsXCIpLHRoaXMuX3RvdWNoRXZlbnQodCxlKX19LF9vblRvdWNoTGVhdmU6ZnVuY3Rpb24odCl7aWYodGhpcy5fbWFwLl9sb2FkZWQpe3RoaXMuX3RvdWNoRXZlbnQodCxcInRvdWNobGVhdmVcIil9fSxfb25Ub3VjaE1vdmU6ZnVuY3Rpb24odCl7aWYodGhpcy5fbWFwLl9sb2FkZWQpe3RoaXMuX3RvdWNoRXZlbnQodCxcInRvdWNobW92ZVwiKX19LF9kZXRlY3RJRTpmdW5jdGlvbigpe3ZhciBlPXQubmF2aWdhdG9yLnVzZXJBZ2VudCxpPWUuaW5kZXhPZihcIk1TSUUgXCIpO2lmKGk+MClyZXR1cm4gcGFyc2VJbnQoZS5zdWJzdHJpbmcoaSs1LGUuaW5kZXhPZihcIi5cIixpKSksMTApO2lmKGUuaW5kZXhPZihcIlRyaWRlbnQvXCIpPjApe3ZhciBvPWUuaW5kZXhPZihcInJ2OlwiKTtyZXR1cm4gcGFyc2VJbnQoZS5zdWJzdHJpbmcobyszLGUuaW5kZXhPZihcIi5cIixvKSksMTApfXZhciBhPWUuaW5kZXhPZihcIkVkZ2UvXCIpO3JldHVybiBhPjAmJnBhcnNlSW50KGUuc3Vic3RyaW5nKGErNSxlLmluZGV4T2YoXCIuXCIsYSkpLDEwKX19KSxMLk1hcC5hZGRJbml0SG9vayhcImFkZEhhbmRsZXJcIixcInRvdWNoRXh0ZW5kXCIsTC5NYXAuVG91Y2hFeHRlbmQpLEwuTWFya2VyLlRvdWNoPUwuTWFya2VyLmV4dGVuZCh7X2luaXRJbnRlcmFjdGlvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmFkZEludGVyYWN0aXZlVGFyZ2V0P0wuTWFya2VyLnByb3RvdHlwZS5faW5pdEludGVyYWN0aW9uLmFwcGx5KHRoaXMpOnRoaXMuX2luaXRJbnRlcmFjdGlvbkxlZ2FjeSgpfSxfaW5pdEludGVyYWN0aW9uTGVnYWN5OmZ1bmN0aW9uKCl7aWYodGhpcy5vcHRpb25zLmNsaWNrYWJsZSl7dmFyIHQ9dGhpcy5faWNvbixlPVtcImRibGNsaWNrXCIsXCJtb3VzZWRvd25cIixcIm1vdXNlb3ZlclwiLFwibW91c2VvdXRcIixcImNvbnRleHRtZW51XCIsXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaGVuZFwiLFwidG91Y2htb3ZlXCJdO3RoaXMuX2RldGVjdElFP2UuY29uY2F0KFtcIk1TUG9pbnRlckRvd25cIixcIk1TUG9pbnRlclVwXCIsXCJNU1BvaW50ZXJNb3ZlXCIsXCJNU1BvaW50ZXJDYW5jZWxcIl0pOmUuY29uY2F0KFtcInRvdWNoY2FuY2VsXCJdKSxMLkRvbVV0aWwuYWRkQ2xhc3ModCxcImxlYWZsZXQtY2xpY2thYmxlXCIpLEwuRG9tRXZlbnQub24odCxcImNsaWNrXCIsdGhpcy5fb25Nb3VzZUNsaWNrLHRoaXMpLEwuRG9tRXZlbnQub24odCxcImtleXByZXNzXCIsdGhpcy5fb25LZXlQcmVzcyx0aGlzKTtmb3IodmFyIGk9MDtpPGUubGVuZ3RoO2krKylMLkRvbUV2ZW50Lm9uKHQsZVtpXSx0aGlzLl9maXJlTW91c2VFdmVudCx0aGlzKTtMLkhhbmRsZXIuTWFya2VyRHJhZyYmKHRoaXMuZHJhZ2dpbmc9bmV3IEwuSGFuZGxlci5NYXJrZXJEcmFnKHRoaXMpLHRoaXMub3B0aW9ucy5kcmFnZ2FibGUmJnRoaXMuZHJhZ2dpbmcuZW5hYmxlKCkpfX0sX2RldGVjdElFOmZ1bmN0aW9uKCl7dmFyIGU9dC5uYXZpZ2F0b3IudXNlckFnZW50LGk9ZS5pbmRleE9mKFwiTVNJRSBcIik7aWYoaT4wKXJldHVybiBwYXJzZUludChlLnN1YnN0cmluZyhpKzUsZS5pbmRleE9mKFwiLlwiLGkpKSwxMCk7aWYoZS5pbmRleE9mKFwiVHJpZGVudC9cIik+MCl7dmFyIG89ZS5pbmRleE9mKFwicnY6XCIpO3JldHVybiBwYXJzZUludChlLnN1YnN0cmluZyhvKzMsZS5pbmRleE9mKFwiLlwiLG8pKSwxMCl9dmFyIGE9ZS5pbmRleE9mKFwiRWRnZS9cIik7cmV0dXJuIGE+MCYmcGFyc2VJbnQoZS5zdWJzdHJpbmcoYSs1LGUuaW5kZXhPZihcIi5cIixhKSksMTApfX0pLEwuTGF0TG5nVXRpbD17Y2xvbmVMYXRMbmdzOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxpPTAsbz10Lmxlbmd0aDtpPG87aSsrKUFycmF5LmlzQXJyYXkodFtpXSk/ZS5wdXNoKEwuTGF0TG5nVXRpbC5jbG9uZUxhdExuZ3ModFtpXSkpOmUucHVzaCh0aGlzLmNsb25lTGF0TG5nKHRbaV0pKTtyZXR1cm4gZX0sY2xvbmVMYXRMbmc6ZnVuY3Rpb24odCl7cmV0dXJuIEwubGF0TG5nKHQubGF0LHQubG5nKX19LGZ1bmN0aW9uKCl7dmFyIHQ9e2ttOjIsaGE6MixtOjAsbWk6MixhYzoyLHlkOjAsZnQ6MCxubToyfTtMLkdlb21ldHJ5VXRpbD1MLmV4dGVuZChMLkdlb21ldHJ5VXRpbHx8e30se2dlb2Rlc2ljQXJlYTpmdW5jdGlvbih0KXt2YXIgZSxpLG89dC5sZW5ndGgsYT0wLG49TWF0aC5QSS8xODA7aWYobz4yKXtmb3IodmFyIHM9MDtzPG87cysrKWU9dFtzXSxpPXRbKHMrMSklb10sYSs9KGkubG5nLWUubG5nKSpuKigyK01hdGguc2luKGUubGF0Km4pK01hdGguc2luKGkubGF0Km4pKTthPTYzNzgxMzcqYSo2Mzc4MTM3LzJ9cmV0dXJuIE1hdGguYWJzKGEpfSxmb3JtYXR0ZWROdW1iZXI6ZnVuY3Rpb24odCxlKXt2YXIgaT1wYXJzZUZsb2F0KHQpLnRvRml4ZWQoZSksbz1MLmRyYXdMb2NhbC5mb3JtYXQmJkwuZHJhd0xvY2FsLmZvcm1hdC5udW1lcmljLGE9byYmby5kZWxpbWl0ZXJzLG49YSYmYS50aG91c2FuZHMscz1hJiZhLmRlY2ltYWw7aWYobnx8cyl7dmFyIHI9aS5zcGxpdChcIi5cIik7aT1uP3JbMF0ucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFwiJDFcIituKTpyWzBdLHM9c3x8XCIuXCIsci5sZW5ndGg+MSYmKGk9aStzK3JbMV0pfXJldHVybiBpfSxyZWFkYWJsZUFyZWE6ZnVuY3Rpb24oZSxpLG8pe3ZhciBhLG4sbz1MLlV0aWwuZXh0ZW5kKHt9LHQsbyk7cmV0dXJuIGk/KG49W1wiaGFcIixcIm1cIl0sdHlwZT10eXBlb2YgaSxcInN0cmluZ1wiPT09dHlwZT9uPVtpXTpcImJvb2xlYW5cIiE9PXR5cGUmJihuPWkpLGE9ZT49MWU2JiYtMSE9PW4uaW5kZXhPZihcImttXCIpP0wuR2VvbWV0cnlVdGlsLmZvcm1hdHRlZE51bWJlcigxZS02KmUsby5rbSkrXCIga23CslwiOmU+PTFlNCYmLTEhPT1uLmluZGV4T2YoXCJoYVwiKT9MLkdlb21ldHJ5VXRpbC5mb3JtYXR0ZWROdW1iZXIoMWUtNCplLG8uaGEpK1wiIGhhXCI6TC5HZW9tZXRyeVV0aWwuZm9ybWF0dGVkTnVtYmVyKGUsby5tKStcIiBtwrJcIik6KGUvPS44MzYxMjcsYT1lPj0zMDk3NjAwP0wuR2VvbWV0cnlVdGlsLmZvcm1hdHRlZE51bWJlcihlLzMwOTc2MDAsby5taSkrXCIgbWnCslwiOmU+PTQ4NDA/TC5HZW9tZXRyeVV0aWwuZm9ybWF0dGVkTnVtYmVyKGUvNDg0MCxvLmFjKStcIiBhY3Jlc1wiOkwuR2VvbWV0cnlVdGlsLmZvcm1hdHRlZE51bWJlcihlLG8ueWQpK1wiIHlkwrJcIiksYX0scmVhZGFibGVEaXN0YW5jZTpmdW5jdGlvbihlLGksbyxhLG4pe3ZhciBzLG49TC5VdGlsLmV4dGVuZCh7fSx0LG4pO3N3aXRjaChpP1wic3RyaW5nXCI9PXR5cGVvZiBpP2k6XCJtZXRyaWNcIjpvP1wiZmVldFwiOmE/XCJuYXV0aWNhbE1pbGVcIjpcInlhcmRzXCIpe2Nhc2VcIm1ldHJpY1wiOnM9ZT4xZTM/TC5HZW9tZXRyeVV0aWwuZm9ybWF0dGVkTnVtYmVyKGUvMWUzLG4ua20pK1wiIGttXCI6TC5HZW9tZXRyeVV0aWwuZm9ybWF0dGVkTnVtYmVyKGUsbi5tKStcIiBtXCI7YnJlYWs7Y2FzZVwiZmVldFwiOmUqPTMuMjgwODMscz1MLkdlb21ldHJ5VXRpbC5mb3JtYXR0ZWROdW1iZXIoZSxuLmZ0KStcIiBmdFwiO2JyZWFrO2Nhc2VcIm5hdXRpY2FsTWlsZVwiOmUqPS41Mzk5NixzPUwuR2VvbWV0cnlVdGlsLmZvcm1hdHRlZE51bWJlcihlLzFlMyxuLm5tKStcIiBubVwiO2JyZWFrO2Nhc2VcInlhcmRzXCI6ZGVmYXVsdDplKj0xLjA5MzYxLHM9ZT4xNzYwP0wuR2VvbWV0cnlVdGlsLmZvcm1hdHRlZE51bWJlcihlLzE3NjAsbi5taSkrXCIgbWlsZXNcIjpMLkdlb21ldHJ5VXRpbC5mb3JtYXR0ZWROdW1iZXIoZSxuLnlkKStcIiB5ZFwifXJldHVybiBzfSxpc1ZlcnNpb24wN3g6ZnVuY3Rpb24oKXt2YXIgdD1MLnZlcnNpb24uc3BsaXQoXCIuXCIpO3JldHVybiAwPT09cGFyc2VJbnQodFswXSwxMCkmJjc9PT1wYXJzZUludCh0WzFdLDEwKX19KX0oKSxMLlV0aWwuZXh0ZW5kKEwuTGluZVV0aWwse3NlZ21lbnRzSW50ZXJzZWN0OmZ1bmN0aW9uKHQsZSxpLG8pe3JldHVybiB0aGlzLl9jaGVja0NvdW50ZXJjbG9ja3dpc2UodCxpLG8pIT09dGhpcy5fY2hlY2tDb3VudGVyY2xvY2t3aXNlKGUsaSxvKSYmdGhpcy5fY2hlY2tDb3VudGVyY2xvY2t3aXNlKHQsZSxpKSE9PXRoaXMuX2NoZWNrQ291bnRlcmNsb2Nrd2lzZSh0LGUsbyl9LF9jaGVja0NvdW50ZXJjbG9ja3dpc2U6ZnVuY3Rpb24odCxlLGkpe3JldHVybihpLnktdC55KSooZS54LXQueCk+KGUueS10LnkpKihpLngtdC54KX19KSxMLlBvbHlsaW5lLmluY2x1ZGUoe2ludGVyc2VjdHM6ZnVuY3Rpb24oKXt2YXIgdCxlLGksbz10aGlzLl9nZXRQcm9qZWN0ZWRQb2ludHMoKSxhPW8/by5sZW5ndGg6MDtpZih0aGlzLl90b29GZXdQb2ludHNGb3JJbnRlcnNlY3Rpb24oKSlyZXR1cm4hMTtmb3IodD1hLTE7dD49Mzt0LS0paWYoZT1vW3QtMV0saT1vW3RdLHRoaXMuX2xpbmVTZWdtZW50c0ludGVyc2VjdHNSYW5nZShlLGksdC0yKSlyZXR1cm4hMDtyZXR1cm4hMX0sbmV3TGF0TG5nSW50ZXJzZWN0czpmdW5jdGlvbih0LGUpe3JldHVybiEhdGhpcy5fbWFwJiZ0aGlzLm5ld1BvaW50SW50ZXJzZWN0cyh0aGlzLl9tYXAubGF0TG5nVG9MYXllclBvaW50KHQpLGUpfSxuZXdQb2ludEludGVyc2VjdHM6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLl9nZXRQcm9qZWN0ZWRQb2ludHMoKSxvPWk/aS5sZW5ndGg6MCxhPWk/aVtvLTFdOm51bGwsbj1vLTI7cmV0dXJuIXRoaXMuX3Rvb0Zld1BvaW50c0ZvckludGVyc2VjdGlvbigxKSYmdGhpcy5fbGluZVNlZ21lbnRzSW50ZXJzZWN0c1JhbmdlKGEsdCxuLGU/MTowKX0sX3Rvb0Zld1BvaW50c0ZvckludGVyc2VjdGlvbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9nZXRQcm9qZWN0ZWRQb2ludHMoKSxpPWU/ZS5sZW5ndGg6MDtyZXR1cm4gaSs9dHx8MCwhZXx8aTw9M30sX2xpbmVTZWdtZW50c0ludGVyc2VjdHNSYW5nZTpmdW5jdGlvbih0LGUsaSxvKXt2YXIgYSxuLHM9dGhpcy5fZ2V0UHJvamVjdGVkUG9pbnRzKCk7bz1vfHwwO2Zvcih2YXIgcj1pO3I+bztyLS0paWYoYT1zW3ItMV0sbj1zW3JdLEwuTGluZVV0aWwuc2VnbWVudHNJbnRlcnNlY3QodCxlLGEsbikpcmV0dXJuITA7cmV0dXJuITF9LF9nZXRQcm9qZWN0ZWRQb2ludHM6ZnVuY3Rpb24oKXtpZighdGhpcy5fZGVmYXVsdFNoYXBlKXJldHVybiB0aGlzLl9vcmlnaW5hbFBvaW50cztmb3IodmFyIHQ9W10sZT10aGlzLl9kZWZhdWx0U2hhcGUoKSxpPTA7aTxlLmxlbmd0aDtpKyspdC5wdXNoKHRoaXMuX21hcC5sYXRMbmdUb0xheWVyUG9pbnQoZVtpXSkpO3JldHVybiB0fX0pLEwuUG9seWdvbi5pbmNsdWRlKHtpbnRlcnNlY3RzOmZ1bmN0aW9uKCl7dmFyIHQsZSxpLG8sYT10aGlzLl9nZXRQcm9qZWN0ZWRQb2ludHMoKTtyZXR1cm4hdGhpcy5fdG9vRmV3UG9pbnRzRm9ySW50ZXJzZWN0aW9uKCkmJighIUwuUG9seWxpbmUucHJvdG90eXBlLmludGVyc2VjdHMuY2FsbCh0aGlzKXx8KHQ9YS5sZW5ndGgsZT1hWzBdLGk9YVt0LTFdLG89dC0yLHRoaXMuX2xpbmVTZWdtZW50c0ludGVyc2VjdHNSYW5nZShpLGUsbywxKSkpfX0pLEwuQ29udHJvbC5EcmF3PUwuQ29udHJvbC5leHRlbmQoe29wdGlvbnM6e3Bvc2l0aW9uOlwidG9wbGVmdFwiLGRyYXc6e30sZWRpdDohMX0saW5pdGlhbGl6ZTpmdW5jdGlvbih0KXtpZihMLnZlcnNpb248XCIwLjdcIil0aHJvdyBuZXcgRXJyb3IoXCJMZWFmbGV0LmRyYXcgMC4yLjMrIHJlcXVpcmVzIExlYWZsZXQgMC43LjArLiBEb3dubG9hZCBsYXRlc3QgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vTGVhZmxldC9MZWFmbGV0L1wiKTtMLkNvbnRyb2wucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLHQpO3ZhciBlO3RoaXMuX3Rvb2xiYXJzPXt9LEwuRHJhd1Rvb2xiYXImJnRoaXMub3B0aW9ucy5kcmF3JiYoZT1uZXcgTC5EcmF3VG9vbGJhcih0aGlzLm9wdGlvbnMuZHJhdyksdGhpcy5fdG9vbGJhcnNbTC5EcmF3VG9vbGJhci5UWVBFXT1lLHRoaXMuX3Rvb2xiYXJzW0wuRHJhd1Rvb2xiYXIuVFlQRV0ub24oXCJlbmFibGVcIix0aGlzLl90b29sYmFyRW5hYmxlZCx0aGlzKSksTC5FZGl0VG9vbGJhciYmdGhpcy5vcHRpb25zLmVkaXQmJihlPW5ldyBMLkVkaXRUb29sYmFyKHRoaXMub3B0aW9ucy5lZGl0KSx0aGlzLl90b29sYmFyc1tMLkVkaXRUb29sYmFyLlRZUEVdPWUsdGhpcy5fdG9vbGJhcnNbTC5FZGl0VG9vbGJhci5UWVBFXS5vbihcImVuYWJsZVwiLHRoaXMuX3Rvb2xiYXJFbmFibGVkLHRoaXMpKSxMLnRvb2xiYXI9dGhpc30sb25BZGQ6ZnVuY3Rpb24odCl7dmFyIGUsaT1MLkRvbVV0aWwuY3JlYXRlKFwiZGl2XCIsXCJsZWFmbGV0LWRyYXdcIiksbz0hMTtmb3IodmFyIGEgaW4gdGhpcy5fdG9vbGJhcnMpdGhpcy5fdG9vbGJhcnMuaGFzT3duUHJvcGVydHkoYSkmJihlPXRoaXMuX3Rvb2xiYXJzW2FdLmFkZFRvb2xiYXIodCkpJiYob3x8KEwuRG9tVXRpbC5oYXNDbGFzcyhlLFwibGVhZmxldC1kcmF3LXRvb2xiYXItdG9wXCIpfHxMLkRvbVV0aWwuYWRkQ2xhc3MoZS5jaGlsZE5vZGVzWzBdLFwibGVhZmxldC1kcmF3LXRvb2xiYXItdG9wXCIpLG89ITApLGkuYXBwZW5kQ2hpbGQoZSkpO3JldHVybiBpfSxvblJlbW92ZTpmdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLl90b29sYmFycyl0aGlzLl90b29sYmFycy5oYXNPd25Qcm9wZXJ0eSh0KSYmdGhpcy5fdG9vbGJhcnNbdF0ucmVtb3ZlVG9vbGJhcigpfSxzZXREcmF3aW5nT3B0aW9uczpmdW5jdGlvbih0KXtmb3IodmFyIGUgaW4gdGhpcy5fdG9vbGJhcnMpdGhpcy5fdG9vbGJhcnNbZV1pbnN0YW5jZW9mIEwuRHJhd1Rvb2xiYXImJnRoaXMuX3Rvb2xiYXJzW2VdLnNldE9wdGlvbnModCl9LF90b29sYmFyRW5hYmxlZDpmdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldDtmb3IodmFyIGkgaW4gdGhpcy5fdG9vbGJhcnMpdGhpcy5fdG9vbGJhcnNbaV0hPT1lJiZ0aGlzLl90b29sYmFyc1tpXS5kaXNhYmxlKCl9fSksTC5NYXAubWVyZ2VPcHRpb25zKHtkcmF3Q29udHJvbFRvb2x0aXBzOiEwLGRyYXdDb250cm9sOiExfSksTC5NYXAuYWRkSW5pdEhvb2soZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMuZHJhd0NvbnRyb2wmJih0aGlzLmRyYXdDb250cm9sPW5ldyBMLkNvbnRyb2wuRHJhdyx0aGlzLmFkZENvbnRyb2wodGhpcy5kcmF3Q29udHJvbCkpfSksTC5Ub29sYmFyPUwuQ2xhc3MuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKHQpe0wuc2V0T3B0aW9ucyh0aGlzLHQpLHRoaXMuX21vZGVzPXt9LHRoaXMuX2FjdGlvbkJ1dHRvbnM9W10sdGhpcy5fYWN0aXZlTW9kZT1udWxsO3ZhciBlPUwudmVyc2lvbi5zcGxpdChcIi5cIik7MT09PXBhcnNlSW50KGVbMF0sMTApJiZwYXJzZUludChlWzFdLDEwKT49Mj9MLlRvb2xiYXIuaW5jbHVkZShMLkV2ZW50ZWQucHJvdG90eXBlKTpMLlRvb2xiYXIuaW5jbHVkZShMLk1peGluLkV2ZW50cyl9LGVuYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMuX2FjdGl2ZU1vZGV9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQoKSYmdGhpcy5fYWN0aXZlTW9kZS5oYW5kbGVyLmRpc2FibGUoKX0sYWRkVG9vbGJhcjpmdW5jdGlvbih0KXt2YXIgZSxpPUwuRG9tVXRpbC5jcmVhdGUoXCJkaXZcIixcImxlYWZsZXQtZHJhdy1zZWN0aW9uXCIpLG89MCxhPXRoaXMuX3Rvb2xiYXJDbGFzc3x8XCJcIixuPXRoaXMuZ2V0TW9kZUhhbmRsZXJzKHQpO2Zvcih0aGlzLl90b29sYmFyQ29udGFpbmVyPUwuRG9tVXRpbC5jcmVhdGUoXCJkaXZcIixcImxlYWZsZXQtZHJhdy10b29sYmFyIGxlYWZsZXQtYmFyXCIpLHRoaXMuX21hcD10LGU9MDtlPG4ubGVuZ3RoO2UrKyluW2VdLmVuYWJsZWQmJnRoaXMuX2luaXRNb2RlSGFuZGxlcihuW2VdLmhhbmRsZXIsdGhpcy5fdG9vbGJhckNvbnRhaW5lcixvKyssYSxuW2VdLnRpdGxlKTtpZihvKXJldHVybiB0aGlzLl9sYXN0QnV0dG9uSW5kZXg9LS1vLHRoaXMuX2FjdGlvbnNDb250YWluZXI9TC5Eb21VdGlsLmNyZWF0ZShcInVsXCIsXCJsZWFmbGV0LWRyYXctYWN0aW9uc1wiKSxpLmFwcGVuZENoaWxkKHRoaXMuX3Rvb2xiYXJDb250YWluZXIpLGkuYXBwZW5kQ2hpbGQodGhpcy5fYWN0aW9uc0NvbnRhaW5lciksaX0scmVtb3ZlVG9vbGJhcjpmdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLl9tb2Rlcyl0aGlzLl9tb2Rlcy5oYXNPd25Qcm9wZXJ0eSh0KSYmKHRoaXMuX2Rpc3Bvc2VCdXR0b24odGhpcy5fbW9kZXNbdF0uYnV0dG9uLHRoaXMuX21vZGVzW3RdLmhhbmRsZXIuZW5hYmxlLHRoaXMuX21vZGVzW3RdLmhhbmRsZXIpLHRoaXMuX21vZGVzW3RdLmhhbmRsZXIuZGlzYWJsZSgpLHRoaXMuX21vZGVzW3RdLmhhbmRsZXIub2ZmKFwiZW5hYmxlZFwiLHRoaXMuX2hhbmRsZXJBY3RpdmF0ZWQsdGhpcykub2ZmKFwiZGlzYWJsZWRcIix0aGlzLl9oYW5kbGVyRGVhY3RpdmF0ZWQsdGhpcykpO3RoaXMuX21vZGVzPXt9O2Zvcih2YXIgZT0wLGk9dGhpcy5fYWN0aW9uQnV0dG9ucy5sZW5ndGg7ZTxpO2UrKyl0aGlzLl9kaXNwb3NlQnV0dG9uKHRoaXMuX2FjdGlvbkJ1dHRvbnNbZV0uYnV0dG9uLHRoaXMuX2FjdGlvbkJ1dHRvbnNbZV0uY2FsbGJhY2ssdGhpcyk7dGhpcy5fYWN0aW9uQnV0dG9ucz1bXSx0aGlzLl9hY3Rpb25zQ29udGFpbmVyPW51bGx9LF9pbml0TW9kZUhhbmRsZXI6ZnVuY3Rpb24odCxlLGksbyxhKXt2YXIgbj10LnR5cGU7dGhpcy5fbW9kZXNbbl09e30sdGhpcy5fbW9kZXNbbl0uaGFuZGxlcj10LHRoaXMuX21vZGVzW25dLmJ1dHRvbj10aGlzLl9jcmVhdGVCdXR0b24oe3R5cGU6bix0aXRsZTphLGNsYXNzTmFtZTpvK1wiLVwiK24sY29udGFpbmVyOmUsY2FsbGJhY2s6dGhpcy5fbW9kZXNbbl0uaGFuZGxlci5lbmFibGUsY29udGV4dDp0aGlzLl9tb2Rlc1tuXS5oYW5kbGVyfSksdGhpcy5fbW9kZXNbbl0uYnV0dG9uSW5kZXg9aSx0aGlzLl9tb2Rlc1tuXS5oYW5kbGVyLm9uKFwiZW5hYmxlZFwiLHRoaXMuX2hhbmRsZXJBY3RpdmF0ZWQsdGhpcykub24oXCJkaXNhYmxlZFwiLHRoaXMuX2hhbmRsZXJEZWFjdGl2YXRlZCx0aGlzKX0sX2RldGVjdElPUzpmdW5jdGlvbigpe3JldHVybi9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhdC5NU1N0cmVhbX0sX2NyZWF0ZUJ1dHRvbjpmdW5jdGlvbih0KXt2YXIgZT1MLkRvbVV0aWwuY3JlYXRlKFwiYVwiLHQuY2xhc3NOYW1lfHxcIlwiLHQuY29udGFpbmVyKSxpPUwuRG9tVXRpbC5jcmVhdGUoXCJzcGFuXCIsXCJzci1vbmx5XCIsdC5jb250YWluZXIpO2UuaHJlZj1cIiNcIixlLmFwcGVuZENoaWxkKGkpLHQudGl0bGUmJihlLnRpdGxlPXQudGl0bGUsaS5pbm5lckhUTUw9dC50aXRsZSksdC50ZXh0JiYoZS5pbm5lckhUTUw9dC50ZXh0LGkuaW5uZXJIVE1MPXQudGV4dCk7dmFyIG89dGhpcy5fZGV0ZWN0SU9TKCk/XCJ0b3VjaHN0YXJ0XCI6XCJjbGlja1wiO3JldHVybiBMLkRvbUV2ZW50Lm9uKGUsXCJjbGlja1wiLEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKS5vbihlLFwibW91c2Vkb3duXCIsTC5Eb21FdmVudC5zdG9wUHJvcGFnYXRpb24pLm9uKGUsXCJkYmxjbGlja1wiLEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKS5vbihlLFwidG91Y2hzdGFydFwiLEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKS5vbihlLFwiY2xpY2tcIixMLkRvbUV2ZW50LnByZXZlbnREZWZhdWx0KS5vbihlLG8sdC5jYWxsYmFjayx0LmNvbnRleHQpLGV9LF9kaXNwb3NlQnV0dG9uOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5fZGV0ZWN0SU9TKCk/XCJ0b3VjaHN0YXJ0XCI6XCJjbGlja1wiO0wuRG9tRXZlbnQub2ZmKHQsXCJjbGlja1wiLEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKS5vZmYodCxcIm1vdXNlZG93blwiLEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKS5vZmYodCxcImRibGNsaWNrXCIsTC5Eb21FdmVudC5zdG9wUHJvcGFnYXRpb24pLm9mZih0LFwidG91Y2hzdGFydFwiLEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKS5vZmYodCxcImNsaWNrXCIsTC5Eb21FdmVudC5wcmV2ZW50RGVmYXVsdCkub2ZmKHQsaSxlKX0sX2hhbmRsZXJBY3RpdmF0ZWQ6ZnVuY3Rpb24odCl7dGhpcy5kaXNhYmxlKCksdGhpcy5fYWN0aXZlTW9kZT10aGlzLl9tb2Rlc1t0LmhhbmRsZXJdLEwuRG9tVXRpbC5hZGRDbGFzcyh0aGlzLl9hY3RpdmVNb2RlLmJ1dHRvbixcImxlYWZsZXQtZHJhdy10b29sYmFyLWJ1dHRvbi1lbmFibGVkXCIpLHRoaXMuX3Nob3dBY3Rpb25zVG9vbGJhcigpLHRoaXMuZmlyZShcImVuYWJsZVwiKX0sX2hhbmRsZXJEZWFjdGl2YXRlZDpmdW5jdGlvbigpe3RoaXMuX2hpZGVBY3Rpb25zVG9vbGJhcigpLEwuRG9tVXRpbC5yZW1vdmVDbGFzcyh0aGlzLl9hY3RpdmVNb2RlLmJ1dHRvbixcImxlYWZsZXQtZHJhdy10b29sYmFyLWJ1dHRvbi1lbmFibGVkXCIpLHRoaXMuX2FjdGl2ZU1vZGU9bnVsbCx0aGlzLmZpcmUoXCJkaXNhYmxlXCIpfSxfY3JlYXRlQWN0aW9uczpmdW5jdGlvbih0KXt2YXIgZSxpLG8sYSxuPXRoaXMuX2FjdGlvbnNDb250YWluZXIscz10aGlzLmdldEFjdGlvbnModCkscj1zLmxlbmd0aDtmb3IoaT0wLG89dGhpcy5fYWN0aW9uQnV0dG9ucy5sZW5ndGg7aTxvO2krKyl0aGlzLl9kaXNwb3NlQnV0dG9uKHRoaXMuX2FjdGlvbkJ1dHRvbnNbaV0uYnV0dG9uLHRoaXMuX2FjdGlvbkJ1dHRvbnNbaV0uY2FsbGJhY2spO2Zvcih0aGlzLl9hY3Rpb25CdXR0b25zPVtdO24uZmlyc3RDaGlsZDspbi5yZW1vdmVDaGlsZChuLmZpcnN0Q2hpbGQpO2Zvcih2YXIgbD0wO2w8cjtsKyspXCJlbmFibGVkXCJpbiBzW2xdJiYhc1tsXS5lbmFibGVkfHwoZT1MLkRvbVV0aWwuY3JlYXRlKFwibGlcIixcIlwiLG4pLGE9dGhpcy5fY3JlYXRlQnV0dG9uKHt0aXRsZTpzW2xdLnRpdGxlLHRleHQ6c1tsXS50ZXh0LGNvbnRhaW5lcjplLGNhbGxiYWNrOnNbbF0uY2FsbGJhY2ssY29udGV4dDpzW2xdLmNvbnRleHR9KSx0aGlzLl9hY3Rpb25CdXR0b25zLnB1c2goe2J1dHRvbjphLGNhbGxiYWNrOnNbbF0uY2FsbGJhY2t9KSl9LF9zaG93QWN0aW9uc1Rvb2xiYXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9hY3RpdmVNb2RlLmJ1dHRvbkluZGV4LGU9dGhpcy5fbGFzdEJ1dHRvbkluZGV4LGk9dGhpcy5fYWN0aXZlTW9kZS5idXR0b24ub2Zmc2V0VG9wLTE7dGhpcy5fY3JlYXRlQWN0aW9ucyh0aGlzLl9hY3RpdmVNb2RlLmhhbmRsZXIpLHRoaXMuX2FjdGlvbnNDb250YWluZXIuc3R5bGUudG9wPWkrXCJweFwiLDA9PT10JiYoTC5Eb21VdGlsLmFkZENsYXNzKHRoaXMuX3Rvb2xiYXJDb250YWluZXIsXCJsZWFmbGV0LWRyYXctdG9vbGJhci1ub3RvcFwiKSxMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fYWN0aW9uc0NvbnRhaW5lcixcImxlYWZsZXQtZHJhdy1hY3Rpb25zLXRvcFwiKSksdD09PWUmJihMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fdG9vbGJhckNvbnRhaW5lcixcImxlYWZsZXQtZHJhdy10b29sYmFyLW5vYm90dG9tXCIpLEwuRG9tVXRpbC5hZGRDbGFzcyh0aGlzLl9hY3Rpb25zQ29udGFpbmVyLFwibGVhZmxldC1kcmF3LWFjdGlvbnMtYm90dG9tXCIpKSx0aGlzLl9hY3Rpb25zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHRoaXMuX21hcC5maXJlKEwuRHJhdy5FdmVudC5UT09MQkFST1BFTkVEKX0sX2hpZGVBY3Rpb25zVG9vbGJhcjpmdW5jdGlvbigpe3RoaXMuX2FjdGlvbnNDb250YWluZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixMLkRvbVV0aWwucmVtb3ZlQ2xhc3ModGhpcy5fdG9vbGJhckNvbnRhaW5lcixcImxlYWZsZXQtZHJhdy10b29sYmFyLW5vdG9wXCIpLEwuRG9tVXRpbC5yZW1vdmVDbGFzcyh0aGlzLl90b29sYmFyQ29udGFpbmVyLFwibGVhZmxldC1kcmF3LXRvb2xiYXItbm9ib3R0b21cIiksTC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX2FjdGlvbnNDb250YWluZXIsXCJsZWFmbGV0LWRyYXctYWN0aW9ucy10b3BcIiksTC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX2FjdGlvbnNDb250YWluZXIsXCJsZWFmbGV0LWRyYXctYWN0aW9ucy1ib3R0b21cIiksdGhpcy5fbWFwLmZpcmUoTC5EcmF3LkV2ZW50LlRPT0xCQVJDTE9TRUQpfX0pLEwuRHJhdz1MLkRyYXd8fHt9LEwuRHJhdy5Ub29sdGlwPUwuQ2xhc3MuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKHQpe3RoaXMuX21hcD10LHRoaXMuX3BvcHVwUGFuZT10Ll9wYW5lcy5wb3B1cFBhbmUsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLl9jb250YWluZXI9dC5vcHRpb25zLmRyYXdDb250cm9sVG9vbHRpcHM/TC5Eb21VdGlsLmNyZWF0ZShcImRpdlwiLFwibGVhZmxldC1kcmF3LXRvb2x0aXBcIix0aGlzLl9wb3B1cFBhbmUpOm51bGwsdGhpcy5fc2luZ2xlTGluZUxhYmVsPSExLHRoaXMuX21hcC5vbihcIm1vdXNlb3V0XCIsdGhpcy5fb25Nb3VzZU91dCx0aGlzKX0sZGlzcG9zZTpmdW5jdGlvbigpe3RoaXMuX21hcC5vZmYoXCJtb3VzZW91dFwiLHRoaXMuX29uTW91c2VPdXQsdGhpcyksdGhpcy5fY29udGFpbmVyJiYodGhpcy5fcG9wdXBQYW5lLnJlbW92ZUNoaWxkKHRoaXMuX2NvbnRhaW5lciksdGhpcy5fY29udGFpbmVyPW51bGwpfSx1cGRhdGVDb250ZW50OmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9jb250YWluZXI/KHQuc3VidGV4dD10LnN1YnRleHR8fFwiXCIsMCE9PXQuc3VidGV4dC5sZW5ndGh8fHRoaXMuX3NpbmdsZUxpbmVMYWJlbD90LnN1YnRleHQubGVuZ3RoPjAmJnRoaXMuX3NpbmdsZUxpbmVMYWJlbCYmKEwuRG9tVXRpbC5yZW1vdmVDbGFzcyh0aGlzLl9jb250YWluZXIsXCJsZWFmbGV0LWRyYXctdG9vbHRpcC1zaW5nbGVcIiksdGhpcy5fc2luZ2xlTGluZUxhYmVsPSExKTooTC5Eb21VdGlsLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lcixcImxlYWZsZXQtZHJhdy10b29sdGlwLXNpbmdsZVwiKSx0aGlzLl9zaW5nbGVMaW5lTGFiZWw9ITApLHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUw9KHQuc3VidGV4dC5sZW5ndGg+MD8nPHNwYW4gY2xhc3M9XCJsZWFmbGV0LWRyYXctdG9vbHRpcC1zdWJ0ZXh0XCI+Jyt0LnN1YnRleHQrXCI8L3NwYW4+PGJyIC8+XCI6XCJcIikrXCI8c3Bhbj5cIit0LnRleHQrXCI8L3NwYW4+XCIsdC50ZXh0fHx0LnN1YnRleHQ/KHRoaXMuX3Zpc2libGU9ITAsdGhpcy5fY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHk9XCJpbmhlcml0XCIpOih0aGlzLl92aXNpYmxlPSExLHRoaXMuX2NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIpLHRoaXMpOnRoaXN9LHVwZGF0ZVBvc2l0aW9uOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX21hcC5sYXRMbmdUb0xheWVyUG9pbnQodCksaT10aGlzLl9jb250YWluZXI7cmV0dXJuIHRoaXMuX2NvbnRhaW5lciYmKHRoaXMuX3Zpc2libGUmJihpLnN0eWxlLnZpc2liaWxpdHk9XCJpbmhlcml0XCIpLEwuRG9tVXRpbC5zZXRQb3NpdGlvbihpLGUpKSx0aGlzfSxzaG93QXNFcnJvcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9jb250YWluZXImJkwuRG9tVXRpbC5hZGRDbGFzcyh0aGlzLl9jb250YWluZXIsXCJsZWFmbGV0LWVycm9yLWRyYXctdG9vbHRpcFwiKSx0aGlzfSxyZW1vdmVFcnJvcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9jb250YWluZXImJkwuRG9tVXRpbC5yZW1vdmVDbGFzcyh0aGlzLl9jb250YWluZXIsXCJsZWFmbGV0LWVycm9yLWRyYXctdG9vbHRpcFwiKSx0aGlzfSxfb25Nb3VzZU91dDpmdW5jdGlvbigpe3RoaXMuX2NvbnRhaW5lciYmKHRoaXMuX2NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIpfX0pLEwuRHJhd1Rvb2xiYXI9TC5Ub29sYmFyLmV4dGVuZCh7c3RhdGljczp7VFlQRTpcImRyYXdcIn0sb3B0aW9uczp7cG9seWxpbmU6e30scG9seWdvbjp7fSxyZWN0YW5nbGU6e30sY2lyY2xlOnt9LG1hcmtlcjp7fSxjaXJjbGVtYXJrZXI6e319LGluaXRpYWxpemU6ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIHRoaXMub3B0aW9ucyl0aGlzLm9wdGlvbnMuaGFzT3duUHJvcGVydHkoZSkmJnRbZV0mJih0W2VdPUwuZXh0ZW5kKHt9LHRoaXMub3B0aW9uc1tlXSx0W2VdKSk7dGhpcy5fdG9vbGJhckNsYXNzPVwibGVhZmxldC1kcmF3LWRyYXdcIixMLlRvb2xiYXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLHQpfSxnZXRNb2RlSGFuZGxlcnM6ZnVuY3Rpb24odCl7cmV0dXJuW3tlbmFibGVkOnRoaXMub3B0aW9ucy5wb2x5bGluZSxoYW5kbGVyOm5ldyBMLkRyYXcuUG9seWxpbmUodCx0aGlzLm9wdGlvbnMucG9seWxpbmUpLHRpdGxlOkwuZHJhd0xvY2FsLmRyYXcudG9vbGJhci5idXR0b25zLnBvbHlsaW5lfSx7ZW5hYmxlZDp0aGlzLm9wdGlvbnMucG9seWdvbixoYW5kbGVyOm5ldyBMLkRyYXcuUG9seWdvbih0LHRoaXMub3B0aW9ucy5wb2x5Z29uKSx0aXRsZTpMLmRyYXdMb2NhbC5kcmF3LnRvb2xiYXIuYnV0dG9ucy5wb2x5Z29ufSx7ZW5hYmxlZDp0aGlzLm9wdGlvbnMucmVjdGFuZ2xlLGhhbmRsZXI6bmV3IEwuRHJhdy5SZWN0YW5nbGUodCx0aGlzLm9wdGlvbnMucmVjdGFuZ2xlKSx0aXRsZTpMLmRyYXdMb2NhbC5kcmF3LnRvb2xiYXIuYnV0dG9ucy5yZWN0YW5nbGV9LHtlbmFibGVkOnRoaXMub3B0aW9ucy5jaXJjbGUsaGFuZGxlcjpuZXcgTC5EcmF3LkNpcmNsZSh0LHRoaXMub3B0aW9ucy5jaXJjbGUpLHRpdGxlOkwuZHJhd0xvY2FsLmRyYXcudG9vbGJhci5idXR0b25zLmNpcmNsZX0se2VuYWJsZWQ6dGhpcy5vcHRpb25zLm1hcmtlcixoYW5kbGVyOm5ldyBMLkRyYXcuTWFya2VyKHQsdGhpcy5vcHRpb25zLm1hcmtlciksdGl0bGU6TC5kcmF3TG9jYWwuZHJhdy50b29sYmFyLmJ1dHRvbnMubWFya2VyfSx7ZW5hYmxlZDp0aGlzLm9wdGlvbnMuY2lyY2xlbWFya2VyLGhhbmRsZXI6bmV3IEwuRHJhdy5DaXJjbGVNYXJrZXIodCx0aGlzLm9wdGlvbnMuY2lyY2xlbWFya2VyKSx0aXRsZTpMLmRyYXdMb2NhbC5kcmF3LnRvb2xiYXIuYnV0dG9ucy5jaXJjbGVtYXJrZXJ9XX0sZ2V0QWN0aW9uczpmdW5jdGlvbih0KXtyZXR1cm5be2VuYWJsZWQ6dC5jb21wbGV0ZVNoYXBlLHRpdGxlOkwuZHJhd0xvY2FsLmRyYXcudG9vbGJhci5maW5pc2gudGl0bGUsdGV4dDpMLmRyYXdMb2NhbC5kcmF3LnRvb2xiYXIuZmluaXNoLnRleHQsY2FsbGJhY2s6dC5jb21wbGV0ZVNoYXBlLGNvbnRleHQ6dH0se2VuYWJsZWQ6dC5kZWxldGVMYXN0VmVydGV4LHRpdGxlOkwuZHJhd0xvY2FsLmRyYXcudG9vbGJhci51bmRvLnRpdGxlLHRleHQ6TC5kcmF3TG9jYWwuZHJhdy50b29sYmFyLnVuZG8udGV4dCxjYWxsYmFjazp0LmRlbGV0ZUxhc3RWZXJ0ZXgsY29udGV4dDp0fSx7dGl0bGU6TC5kcmF3TG9jYWwuZHJhdy50b29sYmFyLmFjdGlvbnMudGl0bGUsdGV4dDpMLmRyYXdMb2NhbC5kcmF3LnRvb2xiYXIuYWN0aW9ucy50ZXh0LGNhbGxiYWNrOnRoaXMuZGlzYWJsZSxjb250ZXh0OnRoaXN9XX0sc2V0T3B0aW9uczpmdW5jdGlvbih0KXtMLnNldE9wdGlvbnModGhpcyx0KTtmb3IodmFyIGUgaW4gdGhpcy5fbW9kZXMpdGhpcy5fbW9kZXMuaGFzT3duUHJvcGVydHkoZSkmJnQuaGFzT3duUHJvcGVydHkoZSkmJnRoaXMuX21vZGVzW2VdLmhhbmRsZXIuc2V0T3B0aW9ucyh0W2VdKX19KSxMLkVkaXRUb29sYmFyPUwuVG9vbGJhci5leHRlbmQoe3N0YXRpY3M6e1RZUEU6XCJlZGl0XCJ9LG9wdGlvbnM6e2VkaXQ6e3NlbGVjdGVkUGF0aE9wdGlvbnM6e2Rhc2hBcnJheTpcIjEwLCAxMFwiLGZpbGw6ITAsZmlsbENvbG9yOlwiI2ZlNTdhMVwiLGZpbGxPcGFjaXR5Oi4xLG1haW50YWluQ29sb3I6ITF9fSxyZW1vdmU6e30scG9seTpudWxsLGZlYXR1cmVHcm91cDpudWxsfSxpbml0aWFsaXplOmZ1bmN0aW9uKHQpe3QuZWRpdCYmKHZvaWQgMD09PXQuZWRpdC5zZWxlY3RlZFBhdGhPcHRpb25zJiYodC5lZGl0LnNlbGVjdGVkUGF0aE9wdGlvbnM9dGhpcy5vcHRpb25zLmVkaXQuc2VsZWN0ZWRQYXRoT3B0aW9ucyksdC5lZGl0LnNlbGVjdGVkUGF0aE9wdGlvbnM9TC5leHRlbmQoe30sdGhpcy5vcHRpb25zLmVkaXQuc2VsZWN0ZWRQYXRoT3B0aW9ucyx0LmVkaXQuc2VsZWN0ZWRQYXRoT3B0aW9ucykpLHQucmVtb3ZlJiYodC5yZW1vdmU9TC5leHRlbmQoe30sdGhpcy5vcHRpb25zLnJlbW92ZSx0LnJlbW92ZSkpLHQucG9seSYmKHQucG9seT1MLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMucG9seSx0LnBvbHkpKSx0aGlzLl90b29sYmFyQ2xhc3M9XCJsZWFmbGV0LWRyYXctZWRpdFwiLEwuVG9vbGJhci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsdCksdGhpcy5fc2VsZWN0ZWRGZWF0dXJlQ291bnQ9MH0sZ2V0TW9kZUhhbmRsZXJzOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMub3B0aW9ucy5mZWF0dXJlR3JvdXA7cmV0dXJuW3tlbmFibGVkOnRoaXMub3B0aW9ucy5lZGl0LGhhbmRsZXI6bmV3IEwuRWRpdFRvb2xiYXIuRWRpdCh0LHtmZWF0dXJlR3JvdXA6ZSxzZWxlY3RlZFBhdGhPcHRpb25zOnRoaXMub3B0aW9ucy5lZGl0LnNlbGVjdGVkUGF0aE9wdGlvbnMscG9seTp0aGlzLm9wdGlvbnMucG9seX0pLHRpdGxlOkwuZHJhd0xvY2FsLmVkaXQudG9vbGJhci5idXR0b25zLmVkaXR9LHtlbmFibGVkOnRoaXMub3B0aW9ucy5yZW1vdmUsaGFuZGxlcjpuZXcgTC5FZGl0VG9vbGJhci5EZWxldGUodCx7ZmVhdHVyZUdyb3VwOmV9KSx0aXRsZTpMLmRyYXdMb2NhbC5lZGl0LnRvb2xiYXIuYnV0dG9ucy5yZW1vdmV9XX0sZ2V0QWN0aW9uczpmdW5jdGlvbih0KXt2YXIgZT1be3RpdGxlOkwuZHJhd0xvY2FsLmVkaXQudG9vbGJhci5hY3Rpb25zLnNhdmUudGl0bGUsdGV4dDpMLmRyYXdMb2NhbC5lZGl0LnRvb2xiYXIuYWN0aW9ucy5zYXZlLnRleHQsY2FsbGJhY2s6dGhpcy5fc2F2ZSxjb250ZXh0OnRoaXN9LHt0aXRsZTpMLmRyYXdMb2NhbC5lZGl0LnRvb2xiYXIuYWN0aW9ucy5jYW5jZWwudGl0bGUsdGV4dDpMLmRyYXdMb2NhbC5lZGl0LnRvb2xiYXIuYWN0aW9ucy5jYW5jZWwudGV4dCxjYWxsYmFjazp0aGlzLmRpc2FibGUsY29udGV4dDp0aGlzfV07cmV0dXJuIHQucmVtb3ZlQWxsTGF5ZXJzJiZlLnB1c2goe3RpdGxlOkwuZHJhd0xvY2FsLmVkaXQudG9vbGJhci5hY3Rpb25zLmNsZWFyQWxsLnRpdGxlLHRleHQ6TC5kcmF3TG9jYWwuZWRpdC50b29sYmFyLmFjdGlvbnMuY2xlYXJBbGwudGV4dCxjYWxsYmFjazp0aGlzLl9jbGVhckFsbExheWVycyxjb250ZXh0OnRoaXN9KSxlfSxhZGRUb29sYmFyOmZ1bmN0aW9uKHQpe3ZhciBlPUwuVG9vbGJhci5wcm90b3R5cGUuYWRkVG9vbGJhci5jYWxsKHRoaXMsdCk7cmV0dXJuIHRoaXMuX2NoZWNrRGlzYWJsZWQoKSx0aGlzLm9wdGlvbnMuZmVhdHVyZUdyb3VwLm9uKFwibGF5ZXJhZGQgbGF5ZXJyZW1vdmVcIix0aGlzLl9jaGVja0Rpc2FibGVkLHRoaXMpLGV9LHJlbW92ZVRvb2xiYXI6ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMuZmVhdHVyZUdyb3VwLm9mZihcImxheWVyYWRkIGxheWVycmVtb3ZlXCIsdGhpcy5fY2hlY2tEaXNhYmxlZCx0aGlzKSxMLlRvb2xiYXIucHJvdG90eXBlLnJlbW92ZVRvb2xiYXIuY2FsbCh0aGlzKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMuZW5hYmxlZCgpJiYodGhpcy5fYWN0aXZlTW9kZS5oYW5kbGVyLnJldmVydExheWVycygpLEwuVG9vbGJhci5wcm90b3R5cGUuZGlzYWJsZS5jYWxsKHRoaXMpKX0sX3NhdmU6ZnVuY3Rpb24oKXt0aGlzLl9hY3RpdmVNb2RlLmhhbmRsZXIuc2F2ZSgpLHRoaXMuX2FjdGl2ZU1vZGUmJnRoaXMuX2FjdGl2ZU1vZGUuaGFuZGxlci5kaXNhYmxlKCl9LF9jbGVhckFsbExheWVyczpmdW5jdGlvbigpe3RoaXMuX2FjdGl2ZU1vZGUuaGFuZGxlci5yZW1vdmVBbGxMYXllcnMoKSx0aGlzLl9hY3RpdmVNb2RlJiZ0aGlzLl9hY3RpdmVNb2RlLmhhbmRsZXIuZGlzYWJsZSgpfSxfY2hlY2tEaXNhYmxlZDpmdW5jdGlvbigpe3ZhciB0LGU9dGhpcy5vcHRpb25zLmZlYXR1cmVHcm91cCxpPTAhPT1lLmdldExheWVycygpLmxlbmd0aDt0aGlzLm9wdGlvbnMuZWRpdCYmKHQ9dGhpcy5fbW9kZXNbTC5FZGl0VG9vbGJhci5FZGl0LlRZUEVdLmJ1dHRvbixpP0wuRG9tVXRpbC5yZW1vdmVDbGFzcyh0LFwibGVhZmxldC1kaXNhYmxlZFwiKTpMLkRvbVV0aWwuYWRkQ2xhc3ModCxcImxlYWZsZXQtZGlzYWJsZWRcIiksdC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLGk/TC5kcmF3TG9jYWwuZWRpdC50b29sYmFyLmJ1dHRvbnMuZWRpdDpMLmRyYXdMb2NhbC5lZGl0LnRvb2xiYXIuYnV0dG9ucy5lZGl0RGlzYWJsZWQpKSx0aGlzLm9wdGlvbnMucmVtb3ZlJiYodD10aGlzLl9tb2Rlc1tMLkVkaXRUb29sYmFyLkRlbGV0ZS5UWVBFXS5idXR0b24saT9MLkRvbVV0aWwucmVtb3ZlQ2xhc3ModCxcImxlYWZsZXQtZGlzYWJsZWRcIik6TC5Eb21VdGlsLmFkZENsYXNzKHQsXCJsZWFmbGV0LWRpc2FibGVkXCIpLHQuc2V0QXR0cmlidXRlKFwidGl0bGVcIixpP0wuZHJhd0xvY2FsLmVkaXQudG9vbGJhci5idXR0b25zLnJlbW92ZTpMLmRyYXdMb2NhbC5lZGl0LnRvb2xiYXIuYnV0dG9ucy5yZW1vdmVEaXNhYmxlZCkpfX0pLEwuRWRpdFRvb2xiYXIuRWRpdD1MLkhhbmRsZXIuZXh0ZW5kKHtzdGF0aWNzOntUWVBFOlwiZWRpdFwifSxpbml0aWFsaXplOmZ1bmN0aW9uKHQsZSl7aWYoTC5IYW5kbGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyx0KSxMLnNldE9wdGlvbnModGhpcyxlKSx0aGlzLl9mZWF0dXJlR3JvdXA9ZS5mZWF0dXJlR3JvdXAsISh0aGlzLl9mZWF0dXJlR3JvdXAgaW5zdGFuY2VvZiBMLkZlYXR1cmVHcm91cCkpdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucy5mZWF0dXJlR3JvdXAgbXVzdCBiZSBhIEwuRmVhdHVyZUdyb3VwXCIpO3RoaXMuX3VuZWRpdGVkTGF5ZXJQcm9wcz17fSx0aGlzLnR5cGU9TC5FZGl0VG9vbGJhci5FZGl0LlRZUEU7dmFyIGk9TC52ZXJzaW9uLnNwbGl0KFwiLlwiKTsxPT09cGFyc2VJbnQoaVswXSwxMCkmJnBhcnNlSW50KGlbMV0sMTApPj0yP0wuRWRpdFRvb2xiYXIuRWRpdC5pbmNsdWRlKEwuRXZlbnRlZC5wcm90b3R5cGUpOkwuRWRpdFRvb2xiYXIuRWRpdC5pbmNsdWRlKEwuTWl4aW4uRXZlbnRzKX0sZW5hYmxlOmZ1bmN0aW9uKCl7IXRoaXMuX2VuYWJsZWQmJnRoaXMuX2hhc0F2YWlsYWJsZUxheWVycygpJiYodGhpcy5maXJlKFwiZW5hYmxlZFwiLHtoYW5kbGVyOnRoaXMudHlwZX0pLHRoaXMuX21hcC5maXJlKEwuRHJhdy5FdmVudC5FRElUU1RBUlQse2hhbmRsZXI6dGhpcy50eXBlfSksTC5IYW5kbGVyLnByb3RvdHlwZS5lbmFibGUuY2FsbCh0aGlzKSx0aGlzLl9mZWF0dXJlR3JvdXAub24oXCJsYXllcmFkZFwiLHRoaXMuX2VuYWJsZUxheWVyRWRpdCx0aGlzKS5vbihcImxheWVycmVtb3ZlXCIsdGhpcy5fZGlzYWJsZUxheWVyRWRpdCx0aGlzKSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLl9lbmFibGVkJiYodGhpcy5fZmVhdHVyZUdyb3VwLm9mZihcImxheWVyYWRkXCIsdGhpcy5fZW5hYmxlTGF5ZXJFZGl0LHRoaXMpLm9mZihcImxheWVycmVtb3ZlXCIsdGhpcy5fZGlzYWJsZUxheWVyRWRpdCx0aGlzKSxMLkhhbmRsZXIucHJvdG90eXBlLmRpc2FibGUuY2FsbCh0aGlzKSx0aGlzLl9tYXAuZmlyZShMLkRyYXcuRXZlbnQuRURJVFNUT1Ase2hhbmRsZXI6dGhpcy50eXBlfSksdGhpcy5maXJlKFwiZGlzYWJsZWRcIix7aGFuZGxlcjp0aGlzLnR5cGV9KSl9LGFkZEhvb2tzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fbWFwO3QmJih0LmdldENvbnRhaW5lcigpLmZvY3VzKCksdGhpcy5fZmVhdHVyZUdyb3VwLmVhY2hMYXllcih0aGlzLl9lbmFibGVMYXllckVkaXQsdGhpcyksdGhpcy5fdG9vbHRpcD1uZXcgTC5EcmF3LlRvb2x0aXAodGhpcy5fbWFwKSx0aGlzLl90b29sdGlwLnVwZGF0ZUNvbnRlbnQoe3RleHQ6TC5kcmF3TG9jYWwuZWRpdC5oYW5kbGVycy5lZGl0LnRvb2x0aXAudGV4dCxzdWJ0ZXh0OkwuZHJhd0xvY2FsLmVkaXQuaGFuZGxlcnMuZWRpdC50b29sdGlwLnN1YnRleHR9KSx0Ll9lZGl0VG9vbHRpcD10aGlzLl90b29sdGlwLHRoaXMuX3VwZGF0ZVRvb2x0aXAoKSx0aGlzLl9tYXAub24oXCJtb3VzZW1vdmVcIix0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKS5vbihcInRvdWNobW92ZVwiLHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpLm9uKFwiTVNQb2ludGVyTW92ZVwiLHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpLm9uKEwuRHJhdy5FdmVudC5FRElUVkVSVEVYLHRoaXMuX3VwZGF0ZVRvb2x0aXAsdGhpcykpfSxyZW1vdmVIb29rczpmdW5jdGlvbigpe3RoaXMuX21hcCYmKHRoaXMuX2ZlYXR1cmVHcm91cC5lYWNoTGF5ZXIodGhpcy5fZGlzYWJsZUxheWVyRWRpdCx0aGlzKSx0aGlzLl91bmVkaXRlZExheWVyUHJvcHM9e30sdGhpcy5fdG9vbHRpcC5kaXNwb3NlKCksdGhpcy5fdG9vbHRpcD1udWxsLHRoaXMuX21hcC5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKS5vZmYoXCJ0b3VjaG1vdmVcIix0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKS5vZmYoXCJNU1BvaW50ZXJNb3ZlXCIsdGhpcy5fb25Nb3VzZU1vdmUsdGhpcykub2ZmKEwuRHJhdy5FdmVudC5FRElUVkVSVEVYLHRoaXMuX3VwZGF0ZVRvb2x0aXAsdGhpcykpfSxyZXZlcnRMYXllcnM6ZnVuY3Rpb24oKXt0aGlzLl9mZWF0dXJlR3JvdXAuZWFjaExheWVyKGZ1bmN0aW9uKHQpe3RoaXMuX3JldmVydExheWVyKHQpfSx0aGlzKX0sc2F2ZTpmdW5jdGlvbigpe3ZhciB0PW5ldyBMLkxheWVyR3JvdXA7dGhpcy5fZmVhdHVyZUdyb3VwLmVhY2hMYXllcihmdW5jdGlvbihlKXtlLmVkaXRlZCYmKHQuYWRkTGF5ZXIoZSksZS5lZGl0ZWQ9ITEpfSksdGhpcy5fbWFwLmZpcmUoTC5EcmF3LkV2ZW50LkVESVRFRCx7bGF5ZXJzOnR9KX0sX2JhY2t1cExheWVyOmZ1bmN0aW9uKHQpe3ZhciBlPUwuVXRpbC5zdGFtcCh0KTt0aGlzLl91bmVkaXRlZExheWVyUHJvcHNbZV18fCh0IGluc3RhbmNlb2YgTC5Qb2x5bGluZXx8dCBpbnN0YW5jZW9mIEwuUG9seWdvbnx8dCBpbnN0YW5jZW9mIEwuUmVjdGFuZ2xlP3RoaXMuX3VuZWRpdGVkTGF5ZXJQcm9wc1tlXT17bGF0bG5nczpMLkxhdExuZ1V0aWwuY2xvbmVMYXRMbmdzKHQuZ2V0TGF0TG5ncygpKX06dCBpbnN0YW5jZW9mIEwuQ2lyY2xlP3RoaXMuX3VuZWRpdGVkTGF5ZXJQcm9wc1tlXT17bGF0bG5nOkwuTGF0TG5nVXRpbC5jbG9uZUxhdExuZyh0LmdldExhdExuZygpKSxyYWRpdXM6dC5nZXRSYWRpdXMoKX06KHQgaW5zdGFuY2VvZiBMLk1hcmtlcnx8dCBpbnN0YW5jZW9mIEwuQ2lyY2xlTWFya2VyKSYmKHRoaXMuX3VuZWRpdGVkTGF5ZXJQcm9wc1tlXT17bGF0bG5nOkwuTGF0TG5nVXRpbC5jbG9uZUxhdExuZyh0LmdldExhdExuZygpKX0pKX0sX2dldFRvb2x0aXBUZXh0OmZ1bmN0aW9uKCl7cmV0dXJue3RleHQ6TC5kcmF3TG9jYWwuZWRpdC5oYW5kbGVycy5lZGl0LnRvb2x0aXAudGV4dCxzdWJ0ZXh0OkwuZHJhd0xvY2FsLmVkaXQuaGFuZGxlcnMuZWRpdC50b29sdGlwLnN1YnRleHR9fSxfdXBkYXRlVG9vbHRpcDpmdW5jdGlvbigpe3RoaXMuX3Rvb2x0aXAudXBkYXRlQ29udGVudCh0aGlzLl9nZXRUb29sdGlwVGV4dCgpKX0sX3JldmVydExheWVyOmZ1bmN0aW9uKHQpe3ZhciBlPUwuVXRpbC5zdGFtcCh0KTt0LmVkaXRlZD0hMSx0aGlzLl91bmVkaXRlZExheWVyUHJvcHMuaGFzT3duUHJvcGVydHkoZSkmJih0IGluc3RhbmNlb2YgTC5Qb2x5bGluZXx8dCBpbnN0YW5jZW9mIEwuUG9seWdvbnx8dCBpbnN0YW5jZW9mIEwuUmVjdGFuZ2xlP3Quc2V0TGF0TG5ncyh0aGlzLl91bmVkaXRlZExheWVyUHJvcHNbZV0ubGF0bG5ncyk6dCBpbnN0YW5jZW9mIEwuQ2lyY2xlPyh0LnNldExhdExuZyh0aGlzLl91bmVkaXRlZExheWVyUHJvcHNbZV0ubGF0bG5nKSx0LnNldFJhZGl1cyh0aGlzLl91bmVkaXRlZExheWVyUHJvcHNbZV0ucmFkaXVzKSk6KHQgaW5zdGFuY2VvZiBMLk1hcmtlcnx8dCBpbnN0YW5jZW9mIEwuQ2lyY2xlTWFya2VyKSYmdC5zZXRMYXRMbmcodGhpcy5fdW5lZGl0ZWRMYXllclByb3BzW2VdLmxhdGxuZyksdC5maXJlKFwicmV2ZXJ0LWVkaXRlZFwiLHtsYXllcjp0fSkpfSxfZW5hYmxlTGF5ZXJFZGl0OmZ1bmN0aW9uKHQpe3ZhciBlLGksbz10LmxheWVyfHx0LnRhcmdldHx8dDt0aGlzLl9iYWNrdXBMYXllcihvKSx0aGlzLm9wdGlvbnMucG9seSYmKGk9TC5VdGlsLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMucG9seSksby5vcHRpb25zLnBvbHk9aSksdGhpcy5vcHRpb25zLnNlbGVjdGVkUGF0aE9wdGlvbnMmJihlPUwuVXRpbC5leHRlbmQoe30sdGhpcy5vcHRpb25zLnNlbGVjdGVkUGF0aE9wdGlvbnMpLGUubWFpbnRhaW5Db2xvciYmKGUuY29sb3I9by5vcHRpb25zLmNvbG9yLGUuZmlsbENvbG9yPW8ub3B0aW9ucy5maWxsQ29sb3IpLG8ub3B0aW9ucy5vcmlnaW5hbD1MLmV4dGVuZCh7fSxvLm9wdGlvbnMpLG8ub3B0aW9ucy5lZGl0aW5nPWUpLG8gaW5zdGFuY2VvZiBMLk1hcmtlcj8oby5lZGl0aW5nJiZvLmVkaXRpbmcuZW5hYmxlKCksby5kcmFnZ2luZy5lbmFibGUoKSxvLm9uKFwiZHJhZ2VuZFwiLHRoaXMuX29uTWFya2VyRHJhZ0VuZCkub24oXCJ0b3VjaG1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx0aGlzKS5vbihcIk1TUG9pbnRlck1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx0aGlzKS5vbihcInRvdWNoZW5kXCIsdGhpcy5fb25NYXJrZXJEcmFnRW5kLHRoaXMpLm9uKFwiTVNQb2ludGVyVXBcIix0aGlzLl9vbk1hcmtlckRyYWdFbmQsdGhpcykpOm8uZWRpdGluZy5lbmFibGUoKX0sX2Rpc2FibGVMYXllckVkaXQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5sYXllcnx8dC50YXJnZXR8fHQ7ZS5lZGl0ZWQ9ITEsZS5lZGl0aW5nJiZlLmVkaXRpbmcuZGlzYWJsZSgpLGRlbGV0ZSBlLm9wdGlvbnMuZWRpdGluZyxkZWxldGUgZS5vcHRpb25zLm9yaWdpbmFsLFxudGhpcy5fc2VsZWN0ZWRQYXRoT3B0aW9ucyYmKGUgaW5zdGFuY2VvZiBMLk1hcmtlcj90aGlzLl90b2dnbGVNYXJrZXJIaWdobGlnaHQoZSk6KGUuc2V0U3R5bGUoZS5vcHRpb25zLnByZXZpb3VzT3B0aW9ucyksZGVsZXRlIGUub3B0aW9ucy5wcmV2aW91c09wdGlvbnMpKSxlIGluc3RhbmNlb2YgTC5NYXJrZXI/KGUuZHJhZ2dpbmcuZGlzYWJsZSgpLGUub2ZmKFwiZHJhZ2VuZFwiLHRoaXMuX29uTWFya2VyRHJhZ0VuZCx0aGlzKS5vZmYoXCJ0b3VjaG1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx0aGlzKS5vZmYoXCJNU1BvaW50ZXJNb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUsdGhpcykub2ZmKFwidG91Y2hlbmRcIix0aGlzLl9vbk1hcmtlckRyYWdFbmQsdGhpcykub2ZmKFwiTVNQb2ludGVyVXBcIix0aGlzLl9vbk1hcmtlckRyYWdFbmQsdGhpcykpOmUuZWRpdGluZy5kaXNhYmxlKCl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbih0KXt0aGlzLl90b29sdGlwLnVwZGF0ZVBvc2l0aW9uKHQubGF0bG5nKX0sX29uTWFya2VyRHJhZ0VuZDpmdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldDtlLmVkaXRlZD0hMCx0aGlzLl9tYXAuZmlyZShMLkRyYXcuRXZlbnQuRURJVE1PVkUse2xheWVyOmV9KX0sX29uVG91Y2hNb3ZlOmZ1bmN0aW9uKHQpe3ZhciBlPXQub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSxpPXRoaXMuX21hcC5tb3VzZUV2ZW50VG9MYXllclBvaW50KGUpLG89dGhpcy5fbWFwLmxheWVyUG9pbnRUb0xhdExuZyhpKTt0LnRhcmdldC5zZXRMYXRMbmcobyl9LF9oYXNBdmFpbGFibGVMYXllcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMCE9PXRoaXMuX2ZlYXR1cmVHcm91cC5nZXRMYXllcnMoKS5sZW5ndGh9fSksTC5FZGl0VG9vbGJhci5EZWxldGU9TC5IYW5kbGVyLmV4dGVuZCh7c3RhdGljczp7VFlQRTpcInJlbW92ZVwifSxpbml0aWFsaXplOmZ1bmN0aW9uKHQsZSl7aWYoTC5IYW5kbGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyx0KSxMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLGUpLHRoaXMuX2RlbGV0YWJsZUxheWVycz10aGlzLm9wdGlvbnMuZmVhdHVyZUdyb3VwLCEodGhpcy5fZGVsZXRhYmxlTGF5ZXJzIGluc3RhbmNlb2YgTC5GZWF0dXJlR3JvdXApKXRocm93IG5ldyBFcnJvcihcIm9wdGlvbnMuZmVhdHVyZUdyb3VwIG11c3QgYmUgYSBMLkZlYXR1cmVHcm91cFwiKTt0aGlzLnR5cGU9TC5FZGl0VG9vbGJhci5EZWxldGUuVFlQRTt2YXIgaT1MLnZlcnNpb24uc3BsaXQoXCIuXCIpOzE9PT1wYXJzZUludChpWzBdLDEwKSYmcGFyc2VJbnQoaVsxXSwxMCk+PTI/TC5FZGl0VG9vbGJhci5EZWxldGUuaW5jbHVkZShMLkV2ZW50ZWQucHJvdG90eXBlKTpMLkVkaXRUb29sYmFyLkRlbGV0ZS5pbmNsdWRlKEwuTWl4aW4uRXZlbnRzKX0sZW5hYmxlOmZ1bmN0aW9uKCl7IXRoaXMuX2VuYWJsZWQmJnRoaXMuX2hhc0F2YWlsYWJsZUxheWVycygpJiYodGhpcy5maXJlKFwiZW5hYmxlZFwiLHtoYW5kbGVyOnRoaXMudHlwZX0pLHRoaXMuX21hcC5maXJlKEwuRHJhdy5FdmVudC5ERUxFVEVTVEFSVCx7aGFuZGxlcjp0aGlzLnR5cGV9KSxMLkhhbmRsZXIucHJvdG90eXBlLmVuYWJsZS5jYWxsKHRoaXMpLHRoaXMuX2RlbGV0YWJsZUxheWVycy5vbihcImxheWVyYWRkXCIsdGhpcy5fZW5hYmxlTGF5ZXJEZWxldGUsdGhpcykub24oXCJsYXllcnJlbW92ZVwiLHRoaXMuX2Rpc2FibGVMYXllckRlbGV0ZSx0aGlzKSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLl9lbmFibGVkJiYodGhpcy5fZGVsZXRhYmxlTGF5ZXJzLm9mZihcImxheWVyYWRkXCIsdGhpcy5fZW5hYmxlTGF5ZXJEZWxldGUsdGhpcykub2ZmKFwibGF5ZXJyZW1vdmVcIix0aGlzLl9kaXNhYmxlTGF5ZXJEZWxldGUsdGhpcyksTC5IYW5kbGVyLnByb3RvdHlwZS5kaXNhYmxlLmNhbGwodGhpcyksdGhpcy5fbWFwLmZpcmUoTC5EcmF3LkV2ZW50LkRFTEVURVNUT1Ase2hhbmRsZXI6dGhpcy50eXBlfSksdGhpcy5maXJlKFwiZGlzYWJsZWRcIix7aGFuZGxlcjp0aGlzLnR5cGV9KSl9LGFkZEhvb2tzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fbWFwO3QmJih0LmdldENvbnRhaW5lcigpLmZvY3VzKCksdGhpcy5fZGVsZXRhYmxlTGF5ZXJzLmVhY2hMYXllcih0aGlzLl9lbmFibGVMYXllckRlbGV0ZSx0aGlzKSx0aGlzLl9kZWxldGVkTGF5ZXJzPW5ldyBMLkxheWVyR3JvdXAsdGhpcy5fdG9vbHRpcD1uZXcgTC5EcmF3LlRvb2x0aXAodGhpcy5fbWFwKSx0aGlzLl90b29sdGlwLnVwZGF0ZUNvbnRlbnQoe3RleHQ6TC5kcmF3TG9jYWwuZWRpdC5oYW5kbGVycy5yZW1vdmUudG9vbHRpcC50ZXh0fSksdGhpcy5fbWFwLm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpfSxyZW1vdmVIb29rczpmdW5jdGlvbigpe3RoaXMuX21hcCYmKHRoaXMuX2RlbGV0YWJsZUxheWVycy5lYWNoTGF5ZXIodGhpcy5fZGlzYWJsZUxheWVyRGVsZXRlLHRoaXMpLHRoaXMuX2RlbGV0ZWRMYXllcnM9bnVsbCx0aGlzLl90b29sdGlwLmRpc3Bvc2UoKSx0aGlzLl90b29sdGlwPW51bGwsdGhpcy5fbWFwLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKX0scmV2ZXJ0TGF5ZXJzOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZXRlZExheWVycy5lYWNoTGF5ZXIoZnVuY3Rpb24odCl7dGhpcy5fZGVsZXRhYmxlTGF5ZXJzLmFkZExheWVyKHQpLHQuZmlyZShcInJldmVydC1kZWxldGVkXCIse2xheWVyOnR9KX0sdGhpcyl9LHNhdmU6ZnVuY3Rpb24oKXt0aGlzLl9tYXAuZmlyZShMLkRyYXcuRXZlbnQuREVMRVRFRCx7bGF5ZXJzOnRoaXMuX2RlbGV0ZWRMYXllcnN9KX0scmVtb3ZlQWxsTGF5ZXJzOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZXRhYmxlTGF5ZXJzLmVhY2hMYXllcihmdW5jdGlvbih0KXt0aGlzLl9yZW1vdmVMYXllcih7bGF5ZXI6dH0pfSx0aGlzKSx0aGlzLnNhdmUoKX0sX2VuYWJsZUxheWVyRGVsZXRlOmZ1bmN0aW9uKHQpeyh0LmxheWVyfHx0LnRhcmdldHx8dCkub24oXCJjbGlja1wiLHRoaXMuX3JlbW92ZUxheWVyLHRoaXMpfSxfZGlzYWJsZUxheWVyRGVsZXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXQubGF5ZXJ8fHQudGFyZ2V0fHx0O2Uub2ZmKFwiY2xpY2tcIix0aGlzLl9yZW1vdmVMYXllcix0aGlzKSx0aGlzLl9kZWxldGVkTGF5ZXJzLnJlbW92ZUxheWVyKGUpfSxfcmVtb3ZlTGF5ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dC5sYXllcnx8dC50YXJnZXR8fHQ7dGhpcy5fZGVsZXRhYmxlTGF5ZXJzLnJlbW92ZUxheWVyKGUpLHRoaXMuX2RlbGV0ZWRMYXllcnMuYWRkTGF5ZXIoZSksZS5maXJlKFwiZGVsZXRlZFwiKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKHQpe3RoaXMuX3Rvb2x0aXAudXBkYXRlUG9zaXRpb24odC5sYXRsbmcpfSxfaGFzQXZhaWxhYmxlTGF5ZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDAhPT10aGlzLl9kZWxldGFibGVMYXllcnMuZ2V0TGF5ZXJzKCkubGVuZ3RofX0pfSh3aW5kb3csZG9jdW1lbnQpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==