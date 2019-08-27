(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grocery-list/grocery-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grocery-list/grocery-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"wall != null\">\n  <div>\n    <h1>{{wall['list_name']}}</h1>\n    <h5>{{wall['list_description']}}</h5>\n  </div>\n</div>\n\n<div *ngIf=\"items != null\">\n  <ul class = \"list-group\">\n    <li *ngFor=\"let item of items\" class = \"list-group-item\">\n      {{item['type']}}:  {{item['item']}}\n      <button [ngStyle]=\"{'float':'right'}\" type = \"button\" class=\"btn btn-danger\" (click)=\"deleteItem(item['item_id'])\">Delete</button>\n    </li>\n  </ul>\n</div>\n<ul class = \"list-group\">\n  <li class = \"list-group-item\">\n    <input type = \"text\" id = 'type' placeholder = \"Type\"/>  :  <input type = \"text\" id = 'item' placeholder = \"Item\"/>\n    <button type = \"button\" class = \"btn btn-success\" [ngStyle]=\"{'float':'right'}\" (click)=\"createItem()\">Create</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grocery-lists/grocery-lists.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grocery-lists/grocery-lists.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>My Lists</h1>\n\n<div *ngFor=\"let list of lists\" [id]=\"list['list_id']\">\n  <div class = \"card\">\n    <div class = \"card-title\" [ngStyle]=\"{'text-align':'center'}\">\n      {{list['list_name']}}\n      <button [ngStyle]=\"{'float':'right'}\"type=\"button\" class=\"btn btn-danger\" (click)=\"delete(list['list_id'])\">Delete</button>\n    </div>\n    <div class = \"card-body\" [ngStyle]=\"{'text-align':'center'}\">\n      {{list['list_description']}}\n      <button [ngStyle]=\"{'float':'right'}\"type=\"button\" class=\"btn btn-warning\" (click)=\"toDetail(list['list_id'])\">Details</button>\n    </div>\n  </div>\n</div>\n<div class = \"card\">\n  <div class = \"card-title\" [ngStyle]=\"{'text-align':'center'}\">\n    <input type = \"text\" id = \"name\" placeholder=\"name\" style=\"text-align: center\"/>\n    <button [ngStyle]=\"{'float':'right'}\"type=\"button\" class=\"btn btn-success\" (click)=\"create()\">Create</button>\n  </div>\n  <div class = \"card-body\" [ngStyle]=\"{'text-align':'center'}\" style = \"margin-right: 85px\">\n    <input type = \"text\" id = \"desc\" placeholder=\"description\" style=\"text-align: center\"/>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grocery_lists_grocery_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grocery-lists/grocery-lists.component */ "./src/app/grocery-lists/grocery-lists.component.ts");
/* harmony import */ var _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grocery-list/grocery-list.component */ "./src/app/grocery-list/grocery-list.component.ts");





var routes = [
    { path: '', component: _grocery_lists_grocery_lists_component__WEBPACK_IMPORTED_MODULE_3__["GroceryListsComponent"] },
    { path: 'list/:id', component: _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_4__["GroceryListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GroceryList';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _grocery_lists_grocery_lists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grocery-lists/grocery-lists.component */ "./src/app/grocery-lists/grocery-lists.component.ts");
/* harmony import */ var _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocery-list/grocery-list.component */ "./src/app/grocery-list/grocery-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _grocery_lists_grocery_lists_component__WEBPACK_IMPORTED_MODULE_5__["GroceryListsComponent"],
                _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_6__["GroceryListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/grocery-list/grocery-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/grocery-list/grocery-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 10px;\n}\n\n.card {\n  margin: 10px;\n}\n\n.card-title {\n  margin: 10px;\n}\n\n.card-body {\n  margin: 10px;\n  padding: 0px;\n}\n\nul {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nli {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nh5 {\n  margin: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvY2VyeS1saXN0L2dyb2NlcnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZ3JvY2VyeS1saXN0L2dyb2NlcnktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG51bCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmxpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaDUge1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/grocery-list/grocery-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/grocery-list/grocery-list.component.ts ***!
  \********************************************************/
/*! exports provided: GroceryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryListComponent", function() { return GroceryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_grocerylist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/grocerylist.service */ "./src/app/services/grocerylist.service.ts");
/* harmony import */ var _services_grocery_lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/grocery-lists.service */ "./src/app/services/grocery-lists.service.ts");





var GroceryListComponent = /** @class */ (function () {
    function GroceryListComponent(route, groceryListService, groceryListsService) {
        this.route = route;
        this.groceryListService = groceryListService;
        this.groceryListsService = groceryListsService;
        this.mockId = -1;
        this.items = [];
    }
    GroceryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listId = this.route.snapshot.params['id'];
        this.groceryListService.getItemsForList(this.listId, function (resp) {
            _this.items = JSON.parse(resp);
            _this.setMockID();
        });
        this.groceryListsService.getOne(this.listId, function (resp) {
            _this.wall = JSON.parse(resp);
        });
    };
    GroceryListComponent.prototype.deleteItem = function (item_id) {
        var e_1, _a;
        var newItems = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.item_id != item_id && item.list_id == this.listId) {
                    newItems.push(item);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.items = newItems;
        this.groceryListService.delete(item_id);
    };
    GroceryListComponent.prototype.createItem = function () {
        var type = document.getElementById("type").value;
        var item = document.getElementById("item").value;
        this.mockId = this.mockId + 1;
        var newItem = { 'item_id': this.mockId, 'list_id': this.listId, 'item': item, 'type': type };
        this.items.push(newItem);
        this.groceryListService.addItem(this.listId, item, type);
    };
    GroceryListComponent.prototype.setMockID = function () {
        var e_2, _a;
        var temp = -1;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.list_id > temp) {
                    this.mockId = item.list_id;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    GroceryListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_grocerylist_service__WEBPACK_IMPORTED_MODULE_3__["GrocerylistService"] },
        { type: _services_grocery_lists_service__WEBPACK_IMPORTED_MODULE_4__["GroceryListsService"] }
    ]; };
    GroceryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grocery-list',
            template: __webpack_require__(/*! raw-loader!./grocery-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/grocery-list/grocery-list.component.html"),
            styles: [__webpack_require__(/*! ./grocery-list.component.css */ "./src/app/grocery-list/grocery-list.component.css")]
        })
    ], GroceryListComponent);
    return GroceryListComponent;
}());



/***/ }),

/***/ "./src/app/grocery-lists/grocery-lists.component.css":
/*!***********************************************************!*\
  !*** ./src/app/grocery-lists/grocery-lists.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 10px;\n}\n\n.card {\n  margin: 10px;\n}\n\n.card-title {\n  margin: 10px;\n}\n\n.card-body {\n  margin: 10px;\n  padding: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvY2VyeS1saXN0cy9ncm9jZXJ5LWxpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZ3JvY2VyeS1saXN0cy9ncm9jZXJ5LWxpc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/grocery-lists/grocery-lists.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/grocery-lists/grocery-lists.component.ts ***!
  \**********************************************************/
/*! exports provided: GroceryListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryListsComponent", function() { return GroceryListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_grocery_lists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/grocery-lists.service */ "./src/app/services/grocery-lists.service.ts");
/* harmony import */ var _services_grocerylist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/grocerylist.service */ "./src/app/services/grocerylist.service.ts");





var GroceryListsComponent = /** @class */ (function () {
    function GroceryListsComponent(route, router, groceryListsService, groceryListService) {
        this.route = route;
        this.router = router;
        this.groceryListsService = groceryListsService;
        this.groceryListService = groceryListService;
        this.lists = [];
    }
    GroceryListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryListsService.getAll(function (resp) {
            _this.lists = JSON.parse(resp);
            _this.setMockID();
        });
    };
    GroceryListsComponent.prototype.toDetail = function (list_id) {
        var toUrl = "/list/" + list_id;
        this.router.navigate([toUrl]);
    };
    GroceryListsComponent.prototype.delete = function (list_id) {
        var e_1, _a;
        var newList = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.lists), _c = _b.next(); !_c.done; _c = _b.next()) {
                var list = _c.value;
                if (list.list_id != list_id) {
                    newList.push(list);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.lists = newList;
        this.groceryListsService.delete(list_id);
        this.groceryListService.delete(list_id);
    };
    GroceryListsComponent.prototype.create = function () {
        var name = document.getElementById("name").value;
        var description = document.getElementById("desc").value;
        this.mockID = this.mockID + 1;
        var newList = { 'list_id': this.mockID, 'list_name': name, 'list_description': description };
        this.lists.push(newList);
        console.log(this.lists);
        this.groceryListsService.createGroceryList(name, description);
    };
    GroceryListsComponent.prototype.setMockID = function () {
        var e_2, _a;
        var temp = -1;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.lists), _c = _b.next(); !_c.done; _c = _b.next()) {
                var list = _c.value;
                if (list.list_id > temp) {
                    this.mockID = list.list_id;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    GroceryListsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_grocery_lists_service__WEBPACK_IMPORTED_MODULE_3__["GroceryListsService"] },
        { type: _services_grocerylist_service__WEBPACK_IMPORTED_MODULE_4__["GrocerylistService"] }
    ]; };
    GroceryListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grocery-lists',
            template: __webpack_require__(/*! raw-loader!./grocery-lists.component.html */ "./node_modules/raw-loader/index.js!./src/app/grocery-lists/grocery-lists.component.html"),
            styles: [__webpack_require__(/*! ./grocery-lists.component.css */ "./src/app/grocery-lists/grocery-lists.component.css")]
        })
    ], GroceryListsComponent);
    return GroceryListsComponent;
}());



/***/ }),

/***/ "./src/app/services/grocery-lists.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/grocery-lists.service.ts ***!
  \***************************************************/
/*! exports provided: GroceryListsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryListsService", function() { return GroceryListsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GroceryListsService = /** @class */ (function () {
    function GroceryListsService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded");
    }
    GroceryListsService.prototype.createGroceryList = function (name, description) {
        var urlString = "/api/grocery-lists";
        var body = "name=" + name + "&description=" + description;
        this.http.post(urlString, body, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    };
    GroceryListsService.prototype.getAll = function (callback) {
        var urlString = "/api/grocery-lists";
        var x = this.http.get(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe(function (lists) {
            callback(lists);
        });
    };
    GroceryListsService.prototype.getOne = function (id, callback) {
        var urlString = "/api/grocery-lists/" + id;
        var x = this.http.get(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe(function (list) {
            callback(list);
        });
        return x;
    };
    GroceryListsService.prototype.delete = function (list_id) {
        var urlString = "/api/grocery-lists/" + list_id;
        var x = this.http.delete(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    };
    GroceryListsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GroceryListsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GroceryListsService);
    return GroceryListsService;
}());



/***/ }),

/***/ "./src/app/services/grocerylist.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/grocerylist.service.ts ***!
  \*************************************************/
/*! exports provided: GrocerylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrocerylistService", function() { return GrocerylistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GrocerylistService = /** @class */ (function () {
    function GrocerylistService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded");
    }
    GrocerylistService.prototype.getItemsForList = function (list_id, callback) {
        var urlString = "/api/grocery-list/lists/" + list_id;
        var x = this.http.get(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe(function (items) {
            callback(items);
        });
    };
    GrocerylistService.prototype.delete = function (item_id) {
        var urlString = "/api/grocery-lists/items/" + item_id;
        var x = this.http.delete(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    };
    GrocerylistService.prototype.deleteAll = function (list_id) {
        var urlString = "/api/grocery-lists/" + list_id + "/all";
        var x = this.http.delete(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    };
    GrocerylistService.prototype.addItem = function (list_id, item, type) {
        var urlString = "/api/grocery-list/" + list_id + "/items";
        var body = "list_id=" + list_id + "&item=" + item + "&type=" + type;
        var x = this.http.post(urlString, body, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    };
    GrocerylistService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GrocerylistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GrocerylistService);
    return GrocerylistService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jake/Desktop/CodingChallenge/fullstack-coding-challenge-JakeDremann/Angular/GroceryList/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map