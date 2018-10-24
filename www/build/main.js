webpackJsonp([0],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_idb__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_idb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_idb__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider() {
        console.log('Hello DatabaseProvider Provider');
        this.dbPromise = __WEBPACK_IMPORTED_MODULE_1_idb___default.a.open('work-time-marker', 1, function (upgradeDB) {
            upgradeDB.createObjectStore('perhour', { keyPath: 'key' });
            upgradeDB.createObjectStore('daily', { keyPath: 'key' });
        });
    }
    DatabaseProvider.prototype.savePerhour = function (payload) {
        this.dbPromise.then(function (db) {
            var tx = db.transaction('perhour', 'readwrite');
            tx.objectStore('perhour').put({ 'key': 'perhour', 'value': payload });
            return tx.complete;
        }).catch(function (e) {
            console.log(e);
        });
    };
    DatabaseProvider.prototype.getPerHour = function () {
        var _this = this;
        return this.dbPromise.then(function (db) { return __awaiter(_this, void 0, void 0, function () {
            var tx, store;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tx = db.transaction('perhour', 'readonly');
                        store = tx.objectStore('perhour');
                        return [4 /*yield*/, store.get('perhour')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
    };
    DatabaseProvider.prototype.saveDaily = function (payload) {
        this.dbPromise.then(function (db) {
            var tx = db.transaction('daily', 'readwrite');
            tx.objectStore('daily').put(__assign({ 'key': payload.date }, payload));
            return tx.complete;
        }).catch(function (e) {
            console.log(e);
        });
    };
    DatabaseProvider.prototype.getAllDaily = function () {
        var _this = this;
        return this.dbPromise.then(function (db) { return __awaiter(_this, void 0, void 0, function () {
            var tx, store;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tx = db.transaction('daily', 'readonly');
                        store = tx.objectStore('daily');
                        return [4 /*yield*/, store.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 207:
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
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 248:
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
webpackEmptyAsyncContext.id = 248;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="主頁" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="記錄" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="設定" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(db, navCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.month = __WEBPACK_IMPORTED_MODULE_3_moment__().format("M");
        console.log(this.month);
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.getMounthData();
    };
    AboutPage.prototype.getMounthData = function () {
        var _this = this;
        this.db.getAllDaily().then(function (data) {
            _this.lists = data.filter(function (d) {
                return __WEBPACK_IMPORTED_MODULE_3_moment__(d.date).format('M') == _this.month;
            });
            console.log(_this.lists);
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      记录\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <table>\n    <tr>\n      <th>日期</th>\n      <th>翻工</th>\n      <th>放工</th>\n      <th>總小時</th>\n      <th>人工</th>\n    </tr>\n    <tr *ngFor=\'let list of lists\'>\n      <td>{{list.key}}</td>\n      <td>{{list.timeOnWork}}</td>\n      <td>{{list.timeOffWork}}</td>\n      <td>{{list.workTime}}</td>\n      <td>{{list.value}}</td>\n    </tr>\n  </table>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mathjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(112);
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
    function HomePage(db, navCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.timeOnWork = __WEBPACK_IMPORTED_MODULE_2_moment__().format("HH:mm:ss");
        this.timeOffWork = __WEBPACK_IMPORTED_MODULE_2_moment__().format("HH:mm:ss");
        this.getToday();
    }
    HomePage.prototype.getToday = function () {
        this.today = __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY-MM-DD");
    };
    HomePage.prototype.calcWorkingTime = function () {
        var _this = this;
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(this.timeOnWork, 'HH:mm');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(this.timeOffWork, 'HH:mm');
        var duration = __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](end.diff(start));
        this.workTime = __WEBPACK_IMPORTED_MODULE_3_mathjs__["round"](duration.as('hours'), 2);
        this.db.getPerHour().then(function (val) {
            _this.toDayMoney = val.value * _this.workTime;
            _this.db.saveDaily({ date: _this.today,
                timeOnWork: _this.timeOnWork,
                timeOffWork: _this.timeOffWork,
                workTime: _this.workTime,
                value: _this.toDayMoney });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>記工時</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>日期\n    <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="today"></ion-datetime>\n  </h2>\n  \n  <div>\n    <ion-item>\n          <ion-label>翻工時間</ion-label>\n          <ion-datetime displayFormat="H:m" [(ngModel)]="timeOnWork"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label>放工時間</ion-label>\n        <ion-datetime displayFormat="H:m" [(ngModel)]="timeOffWork"></ion-datetime>\n    </ion-item>\n\n    \n    <button ion-button (click)="calcWorkingTime()">記錄</button>\n    \n    <ion-item>\n      今日工時： {{workTime}}\n    </ion-item>  \n\n    <ion-item>\n      今日人工： {{toDayMoney}}\n    </ion-item>\n\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(db, navCtrl, navParams) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.perHour = 12;
    }
    SettingPage.prototype.savePerHour = function () {
        this.db.savePerhour(this.perHour);
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.db.getPerHour().then(function (data) {
            _this.perHour = data.value;
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>setting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="primary">每小時人工</ion-label>\n    <ion-input placeholder="每小時人工" [(ngModel)]=\'perHour\' ></ion-input>\n  </ion-item>\n  \n  <button ion-button full (click)=\'savePerHour()\'>保存</button>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(498);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database_database__ = __webpack_require__(112);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(292);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jokersk/Developer/ionic/time-work-marker/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jokersk/Developer/ionic/time-work-marker/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 295,
	"./af.js": 295,
	"./ar": 296,
	"./ar-dz": 297,
	"./ar-dz.js": 297,
	"./ar-kw": 298,
	"./ar-kw.js": 298,
	"./ar-ly": 299,
	"./ar-ly.js": 299,
	"./ar-ma": 300,
	"./ar-ma.js": 300,
	"./ar-sa": 301,
	"./ar-sa.js": 301,
	"./ar-tn": 302,
	"./ar-tn.js": 302,
	"./ar.js": 296,
	"./az": 303,
	"./az.js": 303,
	"./be": 304,
	"./be.js": 304,
	"./bg": 305,
	"./bg.js": 305,
	"./bm": 306,
	"./bm.js": 306,
	"./bn": 307,
	"./bn.js": 307,
	"./bo": 308,
	"./bo.js": 308,
	"./br": 309,
	"./br.js": 309,
	"./bs": 310,
	"./bs.js": 310,
	"./ca": 311,
	"./ca.js": 311,
	"./cs": 312,
	"./cs.js": 312,
	"./cv": 313,
	"./cv.js": 313,
	"./cy": 314,
	"./cy.js": 314,
	"./da": 315,
	"./da.js": 315,
	"./de": 316,
	"./de-at": 317,
	"./de-at.js": 317,
	"./de-ch": 318,
	"./de-ch.js": 318,
	"./de.js": 316,
	"./dv": 319,
	"./dv.js": 319,
	"./el": 320,
	"./el.js": 320,
	"./en-au": 321,
	"./en-au.js": 321,
	"./en-ca": 322,
	"./en-ca.js": 322,
	"./en-gb": 323,
	"./en-gb.js": 323,
	"./en-ie": 324,
	"./en-ie.js": 324,
	"./en-il": 325,
	"./en-il.js": 325,
	"./en-nz": 326,
	"./en-nz.js": 326,
	"./eo": 327,
	"./eo.js": 327,
	"./es": 328,
	"./es-do": 329,
	"./es-do.js": 329,
	"./es-us": 330,
	"./es-us.js": 330,
	"./es.js": 328,
	"./et": 331,
	"./et.js": 331,
	"./eu": 332,
	"./eu.js": 332,
	"./fa": 333,
	"./fa.js": 333,
	"./fi": 334,
	"./fi.js": 334,
	"./fo": 335,
	"./fo.js": 335,
	"./fr": 336,
	"./fr-ca": 337,
	"./fr-ca.js": 337,
	"./fr-ch": 338,
	"./fr-ch.js": 338,
	"./fr.js": 336,
	"./fy": 339,
	"./fy.js": 339,
	"./gd": 340,
	"./gd.js": 340,
	"./gl": 341,
	"./gl.js": 341,
	"./gom-latn": 342,
	"./gom-latn.js": 342,
	"./gu": 343,
	"./gu.js": 343,
	"./he": 344,
	"./he.js": 344,
	"./hi": 345,
	"./hi.js": 345,
	"./hr": 346,
	"./hr.js": 346,
	"./hu": 347,
	"./hu.js": 347,
	"./hy-am": 348,
	"./hy-am.js": 348,
	"./id": 349,
	"./id.js": 349,
	"./is": 350,
	"./is.js": 350,
	"./it": 351,
	"./it.js": 351,
	"./ja": 352,
	"./ja.js": 352,
	"./jv": 353,
	"./jv.js": 353,
	"./ka": 354,
	"./ka.js": 354,
	"./kk": 355,
	"./kk.js": 355,
	"./km": 356,
	"./km.js": 356,
	"./kn": 357,
	"./kn.js": 357,
	"./ko": 358,
	"./ko.js": 358,
	"./ky": 359,
	"./ky.js": 359,
	"./lb": 360,
	"./lb.js": 360,
	"./lo": 361,
	"./lo.js": 361,
	"./lt": 362,
	"./lt.js": 362,
	"./lv": 363,
	"./lv.js": 363,
	"./me": 364,
	"./me.js": 364,
	"./mi": 365,
	"./mi.js": 365,
	"./mk": 366,
	"./mk.js": 366,
	"./ml": 367,
	"./ml.js": 367,
	"./mn": 368,
	"./mn.js": 368,
	"./mr": 369,
	"./mr.js": 369,
	"./ms": 370,
	"./ms-my": 371,
	"./ms-my.js": 371,
	"./ms.js": 370,
	"./mt": 372,
	"./mt.js": 372,
	"./my": 373,
	"./my.js": 373,
	"./nb": 374,
	"./nb.js": 374,
	"./ne": 375,
	"./ne.js": 375,
	"./nl": 376,
	"./nl-be": 377,
	"./nl-be.js": 377,
	"./nl.js": 376,
	"./nn": 378,
	"./nn.js": 378,
	"./pa-in": 379,
	"./pa-in.js": 379,
	"./pl": 380,
	"./pl.js": 380,
	"./pt": 381,
	"./pt-br": 382,
	"./pt-br.js": 382,
	"./pt.js": 381,
	"./ro": 383,
	"./ro.js": 383,
	"./ru": 384,
	"./ru.js": 384,
	"./sd": 385,
	"./sd.js": 385,
	"./se": 386,
	"./se.js": 386,
	"./si": 387,
	"./si.js": 387,
	"./sk": 388,
	"./sk.js": 388,
	"./sl": 389,
	"./sl.js": 389,
	"./sq": 390,
	"./sq.js": 390,
	"./sr": 391,
	"./sr-cyrl": 392,
	"./sr-cyrl.js": 392,
	"./sr.js": 391,
	"./ss": 393,
	"./ss.js": 393,
	"./sv": 394,
	"./sv.js": 394,
	"./sw": 395,
	"./sw.js": 395,
	"./ta": 396,
	"./ta.js": 396,
	"./te": 397,
	"./te.js": 397,
	"./tet": 398,
	"./tet.js": 398,
	"./tg": 399,
	"./tg.js": 399,
	"./th": 400,
	"./th.js": 400,
	"./tl-ph": 401,
	"./tl-ph.js": 401,
	"./tlh": 402,
	"./tlh.js": 402,
	"./tr": 403,
	"./tr.js": 403,
	"./tzl": 404,
	"./tzl.js": 404,
	"./tzm": 405,
	"./tzm-latn": 406,
	"./tzm-latn.js": 406,
	"./tzm.js": 405,
	"./ug-cn": 407,
	"./ug-cn.js": 407,
	"./uk": 408,
	"./uk.js": 408,
	"./ur": 409,
	"./ur.js": 409,
	"./uz": 410,
	"./uz-latn": 411,
	"./uz-latn.js": 411,
	"./uz.js": 410,
	"./vi": 412,
	"./vi.js": 412,
	"./x-pseudo": 413,
	"./x-pseudo.js": 413,
	"./yo": 414,
	"./yo.js": 414,
	"./zh-cn": 415,
	"./zh-cn.js": 415,
	"./zh-hk": 416,
	"./zh-hk.js": 416,
	"./zh-tw": 417,
	"./zh-tw.js": 417
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 551;

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jokersk/Developer/ionic/time-work-marker/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[475]);
//# sourceMappingURL=main.js.map