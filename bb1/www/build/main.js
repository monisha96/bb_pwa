webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.show = false;
    }
    HomePage.prototype.list = function () {
        this.show = !this.show;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/monisha/bb/bb_pwa/src/pages/home/home.html"*/'\n<ion-header>\n\n  \n  \n  <ion-navbar color="dark" >\n\n  \n    \n    <div class = "row responsive-sm">\n      <div class="tabs tabs-icon-left">\n        <strong class="logo1">BINGE</strong>\n        <strong class="logo2">BUCKET</strong>\n        <a class="tab-item1">\n          MOVIES\n        </a>\n        <a class="tab-item">\n          TVSHOWS\n        </a>\n        <a class="tab-item">\n          WEBSERIES\n        </a>\n\n        <a class="tab-last">\n          WATCHLIST\n        </a>\n        <input type="text" name="search" class="search-container">\n      \n\n      </div>\n\n    </div>\n\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-img \n  src=""></ion-img>\n  \n    <button ion-button round class="middle1"></button>\n    <button ion-button round class="middle2"></button>\n    <button ion-button round class="middle3"></button>\n    <button ion-button round class="middle4"></button>\n    <button ion-button round class="middle5"></button>\n    <button ion-button round class="middle6"></button>\n  \n\n\n\n      <ion-segment>\n          <ion-segment-button >all\n          </ion-segment-button>\n          <ion-segment-button >movies\n          </ion-segment-button>\n          <ion-segment-button>tvshows\n          </ion-segment-button>\n          \n        </ion-segment>\n        <div class="dropdown">\n          <button ion-button round (click)="list()" class="filter"> Advanced filters</button>\n          <div class="list" *ngIf="show">\n            <h4>LANGUAGE</h4>\n            \n            <button ion-button round outline class="name" >English\n              \n            </button>\n            <button ion-button round outline class="name" >Hindi\n              \n            </button>\n            <button ion-button round outline class=" name" >Telugu\n              \n            </button>\n            <button ion-button round outline class="name" >Tamil\n              \n            </button>\n            <button ion-button round outline class="name" >Malayalam\n              \n            </button>\n            <button ion-button round outline class="name" >Kannada\n              \n            </button>\n            <button ion-button round outline class="name" >Bengali\n              \n            </button>\n            <button ion-button round outline class="name" >Marathi\n              \n            </button>\n           \n           <h4>GENRE</h4>\n           <button ion-button round outline class="name" >Action\n              \n          </button>\n          <button ion-button round outline class="name" >Adventure</button>\n          <button ion-button round outline class="name" >Comedy</button>\n          <button ion-button round outline class="name" >Thriller</button>\n          <button ion-button round outline class="name" >Drama</button>\n          <h4>RELEASE YEAR</h4>\n          <input type="range" min="1981" max="2018" value="2000" class="slider" >\n          <input type="range" min="1981" max="2018" value="2000" class="slider1">\n          </div>\n                    \n        </div>\n \n<div class="Release">\n  <h3 style ="margin-top:10px;margin-left: 20px;">Latest Releases</h3>\n  <img src="../assets/imgs/image1.jpg">\n  <img src="../assets/imgs/image2.jpg">\n  <img src="../assets/imgs/image3.jpg">\n  <img src="../assets/imgs/image1.jpg">\n  <img src="../assets/imgs/image2.jpg">\n  <img src="../assets/imgs/image3.jpg">\n  <img src="../assets/imgs/image1.jpg">\n  <img src="../assets/imgs/image2.jpg">\n\n</div>\n\n<div class="toppick">\n  <h3>Top pick for you</h3>\n  <img src="../assets/imgs/pick.jpeg" width="900" height="250">\n</div>\n  <strong style="color:white;position:relative;top:500px;left:200px;font-size: 24px;font-family: oswald Regular;">MAD MAX : FURY ROAD</strong>\n<span style="color:white;position:absolute;font-size:12px;font-family:sans-serif;transform:translateY(540px);">ACTION</span> <span style="color:white;position:absolute;font-size:12px;font-family: sans serif;transform:translate(100px,540px)">ADVENTURE</span>   \n<h6>Synopsis</h6>\n<p> In a post-apocalyptic wasteland,a woman rebels against a tyrannical ruler in search for her <br>homeland with a aid of a group of female prisoners,<br> a psychotic worshipper, and a drifter named Max.</p>\n<h5 style="transform:translate(600px,370px);color:white;font-family: sans-serif;">watch it on</h5>\n</ion-content>\n\n\n<style>\n\n  .logo1{\n        color:#3464E0;\n        padding-left:60px;\n        font-size:14px;\n        font-family:oswald regular;\n        font-weight:bold;\n    }\n.logo2{\n    color:beige;\n    font-size: 14px;\n    font-family:oswald regular;\n    font-weight:bold;\n}\n\n    .tab-item {\n\n        padding-left:40px;\n        overflow: hidden;\n        width: 100%;\n        align-items: center;\n        font-family: oswald regular;\n        height: 20px;\n        font-size: 10px;\n        color: silver;\n    \n      }\n      .tab-item1{\n      padding-left: 40px;\n      overflow: hidden;\n        width: 100%;\n        align-items: center;\n        font-family: oswald regular;\n        height: 20px;\n        font-size: 10px;\n        color: silver;\n    \n      }\n      .tab-last{\n        padding-left:440px;\n        overflow: hidden;\n        width: 100%;\n        \n        font-family: oswald regular;\n        height: 20px;\n        font-size: 10px;\n        color: silver;\n      }\n      .search-container {\n        position:relative;\n        background-color: black;\n        border: none;\n        border-radius: 25px;\n      \n       height: 30px; \n       margin-left:25px;\n        width:270px;\n      }\n  \n\n  ion-content{\n        background-color: rgb(12, 11, 11);\n    }\nion-img{\n  width:90%; \n    height:330px;\n    position: absolute;\n    \n    left:50px;\n    right:50px;\n    margin:0 auto;\n    top:26%;\n    transform:translateY(-50%);\n}\n\n\n.middle1{\n  top:320px;\n  left:200px;\n  background-image: url(\'../assets/imgs/m1.png\');\n  width:90px;\n  height:35px;\n  align-items:center;\n}\n\n.middle2{\n  top:320px;\n  left:220px;\n  background-image: url(\'../assets/imgs/m2.png\');\n  background-repeat: no-repeat;\n  width:90px;\n  height:35px;\n  align-items:center;\n}\n.middle3{\n  top:320px;\n  left:240px;\n  background-image: url(\'../assets/imgs/m3.png\');\n  width:90px;\n  height:35px;\n  align-items:center;\n}\n.middle4{\n  top:320px;\n  left:260px;\n  background-image: url(\'../assets/imgs/m4.png\');\n  width:90px;\n  height:35px;\n  align-items:center;\n}\n.middle5{\n  top:320px;\n  left:280px;\n  background-image: url(\'../assets/imgs/m5.png\');\n  background-repeat: no-repeat;\n  width:90px;\n  height:35px;\n  align-items:center;\n}\n.middle6{\n  top:320px;\n  left:300px;\n}\n\nion-segment{\n  width:200px;\n  background:#262626;\n  border-radius:20px;\n  height:30px;\n  position:absolute;\n  top:70%;\n  left:440px;\n  \n}\nion-segment ion-segment-button{\n  color:#fff;\n  font-size: 10px;\n  font-family: oswald regular;\n}\nion-segment ion-segment-button:hover{\n  background-color:#3464E0;\n  border-radius:25px;\n  height:32px;\n  \n  font-family: oswald regular;\n}\n.dropdown .filter{\n  background-color: #262626;\n  position:absolute;\n  left:700px;\n  top:69%;\n  font-family: oswald regular;\n  font-size:10px;\n\n}\n.dropdown .list{\n  position:absolute;\n  background-color: #262626;\n  width:100%;\n  height:40%;\n  top:78%;\n  padding: 10px;\n  \n}\n.list .name{\n  width:66px;\n  height:25px;\n  font-size: 10px;\n  color:#fff;\n  border-color: #fff;\n  \n  \n}\n\nh3{\n  color:#fff;\n  font-size:14px;\n}\nh4{\n  color:#3464E0;\n  font-size: 12px;\n  \n}\n.Release{\n  background-color: #262626;\n\n  position:absolute;\n  top:80%;\n  \n  \n  width:100%;\n}\n.filter:active .Release{\n  top:100%;\n}\n.Release img{\n  padding: 0 15px 10px 15px;\n}\n.toppick{\n  position:relative;\n  top:120%;\n  \n  }\n.toppick img{\n  filter:brightness(50%);\n}\nh6{\n  color:white;\n  font-size:12px;\n  font-family:sans-serif;\n  transform:translate(200px,530px);\n  \n}\np{\n  color:white;\n  font-size: 12px;\n  font-family:sans-serif;\n  transform:translate(200px,540px);\n}\n.list .slider {\n    -webkit-appearance: none;\n    width:400px;\n    height: 2px;\n    background: #d3d3d3;\n    outline: none;\n    border-radius: 5px;\n    opacity: 0.7;\n    -webkit-transition: .2s;\n    transition: opacity .2s;\n}\n.list .slider1 {\n    -webkit-appearance: none;\n  width:400px;\n    height: 2px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.7;\n    -webkit-transition: .2s;\n    transition: opacity .2s;\n    border-radius:5px;\n}\n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%; \n    background: #3464E0;\n    cursor: pointer;\n}\n\n.slider::-moz-range-thumb {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background: #3464E0;\n    cursor: pointer;\n}\n.slider1::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%; \n    background: #3464E0;\n    cursor: pointer;\n}\n\n.slider1::-moz-range-thumb {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background: #3464E0;\n    cursor: pointer;\n}\n\n</style>'/*ion-inline-end:"/home/monisha/bb/bb_pwa/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/monisha/bb/bb_pwa/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/monisha/bb/bb_pwa/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map