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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(417);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 417:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(417);
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
	"./af": 294,
	"./af.js": 294,
	"./ar": 295,
	"./ar-dz": 296,
	"./ar-dz.js": 296,
	"./ar-kw": 297,
	"./ar-kw.js": 297,
	"./ar-ly": 298,
	"./ar-ly.js": 298,
	"./ar-ma": 299,
	"./ar-ma.js": 299,
	"./ar-sa": 300,
	"./ar-sa.js": 300,
	"./ar-tn": 301,
	"./ar-tn.js": 301,
	"./ar.js": 295,
	"./az": 302,
	"./az.js": 302,
	"./be": 303,
	"./be.js": 303,
	"./bg": 304,
	"./bg.js": 304,
	"./bm": 305,
	"./bm.js": 305,
	"./bn": 306,
	"./bn.js": 306,
	"./bo": 307,
	"./bo.js": 307,
	"./br": 308,
	"./br.js": 308,
	"./bs": 309,
	"./bs.js": 309,
	"./ca": 310,
	"./ca.js": 310,
	"./cs": 311,
	"./cs.js": 311,
	"./cv": 312,
	"./cv.js": 312,
	"./cy": 313,
	"./cy.js": 313,
	"./da": 314,
	"./da.js": 314,
	"./de": 315,
	"./de-at": 316,
	"./de-at.js": 316,
	"./de-ch": 317,
	"./de-ch.js": 317,
	"./de.js": 315,
	"./dv": 318,
	"./dv.js": 318,
	"./el": 319,
	"./el.js": 319,
	"./en-au": 320,
	"./en-au.js": 320,
	"./en-ca": 321,
	"./en-ca.js": 321,
	"./en-gb": 322,
	"./en-gb.js": 322,
	"./en-ie": 323,
	"./en-ie.js": 323,
	"./en-il": 324,
	"./en-il.js": 324,
	"./en-nz": 325,
	"./en-nz.js": 325,
	"./eo": 326,
	"./eo.js": 326,
	"./es": 327,
	"./es-do": 328,
	"./es-do.js": 328,
	"./es-us": 329,
	"./es-us.js": 329,
	"./es.js": 327,
	"./et": 330,
	"./et.js": 330,
	"./eu": 331,
	"./eu.js": 331,
	"./fa": 332,
	"./fa.js": 332,
	"./fi": 333,
	"./fi.js": 333,
	"./fo": 334,
	"./fo.js": 334,
	"./fr": 335,
	"./fr-ca": 336,
	"./fr-ca.js": 336,
	"./fr-ch": 337,
	"./fr-ch.js": 337,
	"./fr.js": 335,
	"./fy": 338,
	"./fy.js": 338,
	"./gd": 339,
	"./gd.js": 339,
	"./gl": 340,
	"./gl.js": 340,
	"./gom-latn": 341,
	"./gom-latn.js": 341,
	"./gu": 342,
	"./gu.js": 342,
	"./he": 343,
	"./he.js": 343,
	"./hi": 344,
	"./hi.js": 344,
	"./hr": 345,
	"./hr.js": 345,
	"./hu": 346,
	"./hu.js": 346,
	"./hy-am": 347,
	"./hy-am.js": 347,
	"./id": 348,
	"./id.js": 348,
	"./is": 349,
	"./is.js": 349,
	"./it": 350,
	"./it.js": 350,
	"./ja": 351,
	"./ja.js": 351,
	"./jv": 352,
	"./jv.js": 352,
	"./ka": 353,
	"./ka.js": 353,
	"./kk": 354,
	"./kk.js": 354,
	"./km": 355,
	"./km.js": 355,
	"./kn": 356,
	"./kn.js": 356,
	"./ko": 357,
	"./ko.js": 357,
	"./ky": 358,
	"./ky.js": 358,
	"./lb": 359,
	"./lb.js": 359,
	"./lo": 360,
	"./lo.js": 360,
	"./lt": 361,
	"./lt.js": 361,
	"./lv": 362,
	"./lv.js": 362,
	"./me": 363,
	"./me.js": 363,
	"./mi": 364,
	"./mi.js": 364,
	"./mk": 365,
	"./mk.js": 365,
	"./ml": 366,
	"./ml.js": 366,
	"./mn": 367,
	"./mn.js": 367,
	"./mr": 368,
	"./mr.js": 368,
	"./ms": 369,
	"./ms-my": 370,
	"./ms-my.js": 370,
	"./ms.js": 369,
	"./mt": 371,
	"./mt.js": 371,
	"./my": 372,
	"./my.js": 372,
	"./nb": 373,
	"./nb.js": 373,
	"./ne": 374,
	"./ne.js": 374,
	"./nl": 375,
	"./nl-be": 376,
	"./nl-be.js": 376,
	"./nl.js": 375,
	"./nn": 377,
	"./nn.js": 377,
	"./pa-in": 378,
	"./pa-in.js": 378,
	"./pl": 379,
	"./pl.js": 379,
	"./pt": 380,
	"./pt-br": 381,
	"./pt-br.js": 381,
	"./pt.js": 380,
	"./ro": 382,
	"./ro.js": 382,
	"./ru": 383,
	"./ru.js": 383,
	"./sd": 384,
	"./sd.js": 384,
	"./se": 385,
	"./se.js": 385,
	"./si": 386,
	"./si.js": 386,
	"./sk": 387,
	"./sk.js": 387,
	"./sl": 388,
	"./sl.js": 388,
	"./sq": 389,
	"./sq.js": 389,
	"./sr": 390,
	"./sr-cyrl": 391,
	"./sr-cyrl.js": 391,
	"./sr.js": 390,
	"./ss": 392,
	"./ss.js": 392,
	"./sv": 393,
	"./sv.js": 393,
	"./sw": 394,
	"./sw.js": 394,
	"./ta": 395,
	"./ta.js": 395,
	"./te": 396,
	"./te.js": 396,
	"./tet": 397,
	"./tet.js": 397,
	"./tg": 398,
	"./tg.js": 398,
	"./th": 399,
	"./th.js": 399,
	"./tl-ph": 400,
	"./tl-ph.js": 400,
	"./tlh": 401,
	"./tlh.js": 401,
	"./tr": 402,
	"./tr.js": 402,
	"./tzl": 403,
	"./tzl.js": 403,
	"./tzm": 404,
	"./tzm-latn": 405,
	"./tzm-latn.js": 405,
	"./tzm.js": 404,
	"./ug-cn": 406,
	"./ug-cn.js": 406,
	"./uk": 407,
	"./uk.js": 407,
	"./ur": 408,
	"./ur.js": 408,
	"./uz": 409,
	"./uz-latn": 410,
	"./uz-latn.js": 410,
	"./uz.js": 409,
	"./vi": 411,
	"./vi.js": 411,
	"./x-pseudo": 412,
	"./x-pseudo.js": 412,
	"./yo": 413,
	"./yo.js": 413,
	"./zh-cn": 414,
	"./zh-cn.js": 414,
	"./zh-hk": 415,
	"./zh-hk.js": 415,
	"./zh-tw": 416,
	"./zh-tw.js": 416
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