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

module.exports = "<div *ngIf=\"wall != null\">\n  <div>\n    <h1>{{wall['list_name']}}</h1>\n    <h5>{{wall['list_description']}}</h5>\n  </div>\n</div>\n\n<div *ngIf=\"items != null\">\n  <ul class = \"list-group\">\n    <li *ngFor=\"let item of items\" class = \"list-group-item\" [id] = \"item['item_id']\">\n      {{item['type']}}:  {{item['item']}}\n      <button [ngStyle]=\"{'float':'right'}\" type = \"button\" class=\"btn btn-danger\" (click)=\"deleteItem(item['item_id'], $event)\">Delete</button>\n    </li>\n  </ul>\n</div>\n\n<form></form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grocery-lists/grocery-lists.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grocery-lists/grocery-lists.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>My Lists</h1>\n\n<div *ngFor=\"let list of lists\" [id]=\"list['list_id']\">\n  <div class = \"card\" (click)=\"toDetail(list['list_id'])\">\n    <div class = \"card-title\">\n      {{list['list_name']}}\n      <button [ngStyle]=\"{'float':'right'}\"type=\"button\" class=\"btn btn-danger\" (click)=\"delete(list['list_id'], $event)\">Delete</button>\n    </div>\n    <div class = \"card-body\">{{list['list_description']}}</div>\n\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _grocery_lists_grocery_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grocery-lists/grocery-lists.component */ "./src/app/grocery-lists/grocery-lists.component.ts");
/* harmony import */ var _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grocery-list/grocery-list.component */ "./src/app/grocery-list/grocery-list.component.ts");





const routes = [
    { path: '', component: _grocery_lists_grocery_lists_component__WEBPACK_IMPORTED_MODULE_3__["GroceryListsComponent"] },
    { path: 'list/:id', component: _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_4__["GroceryListComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'GroceryList';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _grocery_lists_grocery_lists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grocery-lists/grocery-lists.component */ "./src/app/grocery-lists/grocery-lists.component.ts");
/* harmony import */ var _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocery-list/grocery-list.component */ "./src/app/grocery-list/grocery-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let AppModule = class AppModule {
};
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



/***/ }),

/***/ "./src/app/grocery-list/grocery-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/grocery-list/grocery-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb2NlcnktbGlzdC9ncm9jZXJ5LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_grocerylist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/grocerylist.service */ "./src/app/services/grocerylist.service.ts");
/* harmony import */ var _services_grocery_lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/grocery-lists.service */ "./src/app/services/grocery-lists.service.ts");





let GroceryListComponent = class GroceryListComponent {
    constructor(route, groceryListService, groceryListsService) {
        this.route = route;
        this.groceryListService = groceryListService;
        this.groceryListsService = groceryListsService;
    }
    ngOnInit() {
        this.wallId = this.route.snapshot.params['id'];
        this.groceryListService.getItemsForList(this.wallId, resp => {
            this.items = JSON.parse(resp);
        });
        this.groceryListsService.getOne(this.wallId, resp => {
            this.wall = JSON.parse(resp);
        });
    }
    deleteItem(item_id, event) {
        event.stopPropagation();
        this.groceryListService.delete(item_id);
        let elem = document.querySelector("#" + item_id);
        elem.parentNode.removeChild(elem);
    }
};
GroceryListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_grocerylist_service__WEBPACK_IMPORTED_MODULE_3__["GrocerylistService"] },
    { type: _services_grocery_lists_service__WEBPACK_IMPORTED_MODULE_4__["GroceryListsService"] }
];
GroceryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grocery-list',
        template: __webpack_require__(/*! raw-loader!./grocery-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/grocery-list/grocery-list.component.html"),
        styles: [__webpack_require__(/*! ./grocery-list.component.css */ "./src/app/grocery-list/grocery-list.component.css")]
    })
], GroceryListComponent);



/***/ }),

/***/ "./src/app/grocery-lists/grocery-lists.component.css":
/*!***********************************************************!*\
  !*** ./src/app/grocery-lists/grocery-lists.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 10px;\n}\n\n.card {\n  margin: 10px;\n}\n\n.card-title {\n  margin: 10px;\n}\n\n.card-body {\n  margin: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvY2VyeS1saXN0cy9ncm9jZXJ5LWxpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ncm9jZXJ5LWxpc3RzL2dyb2NlcnktbGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_grocery_lists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/grocery-lists.service */ "./src/app/services/grocery-lists.service.ts");




let GroceryListsComponent = class GroceryListsComponent {
    constructor(route, router, groceryListService) {
        this.route = route;
        this.router = router;
        this.groceryListService = groceryListService;
    }
    ngOnInit() {
        this.groceryListService.getAll(resp => {
            this.lists = JSON.parse(resp);
        });
    }
    toDetail(list_id) {
        let toUrl = "/list/" + list_id;
        this.router.navigate([toUrl]);
    }
    delete(list_id, event) {
        event.stopPropagation();
        this.groceryListService.delete(list_id);
        let elem = document.querySelector("#" + list_id);
        elem.parentNode.removeChild(elem);
    }
};
GroceryListsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_grocery_lists_service__WEBPACK_IMPORTED_MODULE_3__["GroceryListsService"] }
];
GroceryListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grocery-lists',
        template: __webpack_require__(/*! raw-loader!./grocery-lists.component.html */ "./node_modules/raw-loader/index.js!./src/app/grocery-lists/grocery-lists.component.html"),
        styles: [__webpack_require__(/*! ./grocery-lists.component.css */ "./src/app/grocery-lists/grocery-lists.component.css")]
    })
], GroceryListsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GroceryListsService = class GroceryListsService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded");
    }
    createGroceryList(name, description) {
        let urlString = "/api/grocery-lists";
        let body = "title=" + name + "&description=" + description;
        let x = this.http.post(urlString, body, {
            headers: this.headers,
            responseType: "text"
        });
        return x;
    }
    getAll(callback) {
        let urlString = "/api/grocery-lists";
        let x = this.http.get(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe(lists => {
            callback(lists);
        });
    }
    getOne(id, callback) {
        let urlString = "/api/grocery-lists/" + id;
        let x = this.http.get(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe(list => {
            callback(list);
        });
        return x;
    }
    delete(list_id) {
        let urlString = "/api/grocery-lists/" + list_id;
        let x = this.http.delete(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    }
};
GroceryListsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GroceryListsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroceryListsService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GrocerylistService = class GrocerylistService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded");
    }
    getItemsForList(list_id, callback) {
        let urlString = "/api/grocery-list/lists/" + list_id;
        let x = this.http.get(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe(items => {
            callback(items);
        });
    }
    delete(item_id) {
        let urlString = "/api/grocery-lists/items/" + item_id;
        let x = this.http.delete(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    }
    deleteAll(list_id) {
        let urlString = "/api/grocery-lists/" + list_id + "/all";
        let x = this.http.delete(urlString, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    }
    addItem(list_id, item, type) {
        let urlString = "/api/grocery-lists/" + list_id + "/items";
        let body = "list_id=" + list_id + "&item=" + item + "&type=" + type;
        let x = this.http.post(urlString, body, {
            headers: this.headers,
            responseType: "text"
        }).subscribe();
    }
};
GrocerylistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GrocerylistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GrocerylistService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map