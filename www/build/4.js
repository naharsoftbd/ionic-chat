webpackJsonp([4],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFriendsPageModule", function() { return ListFriendsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_friends__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListFriendsPageModule = /** @class */ (function () {
    function ListFriendsPageModule() {
    }
    ListFriendsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_friends__["a" /* ListFriendsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_friends__["a" /* ListFriendsPage */]),
            ],
        })
    ], ListFriendsPageModule);
    return ListFriendsPageModule;
}());

//# sourceMappingURL=list-friends.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(221);
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
 * Generated class for the ListFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListFriendsPage = /** @class */ (function () {
    function ListFriendsPage(menuCtrl, http, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Util = __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* Util */];
        this.friends = [];
    }
    ListFriendsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.http.get('friends.json').subscribe(function (friends) {
            _this.friends = friends;
        }, function (err) {
            console.error(err);
        });
    };
    ListFriendsPage.prototype.goToProfileFriend = function (sliding, friend) {
        sliding.close();
        this.navCtrl.push('ProfileFriendPage', { friend: friend });
    };
    ListFriendsPage.prototype.goToChatRoom = function (friend) {
        this.navCtrl.push('ChatRoomPage', { friend: friend });
    };
    ListFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-friends',template:/*ion-inline-start:"C:\ionic\chat\src\pages\list-friends\list-friends.html"*/'<!--\n  Generated template for the ListFriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n   <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Friends</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-top>\n  <ion-list>\n    <ion-item-sliding #sliding *ngFor="let friend of friends">\n      <ion-item (click)="goToChatRoom(friend)">\n        <ion-avatar item-start>\n          <img [src]="Util.pathAvatar(friend.avatar)">\n        </ion-avatar>\n        <h2>{{ friend.fullname }} <span ion-text color="primary">({{ friend.username }})</span></h2>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="goToProfileFriend(sliding, friend)">\n          <ion-icon name="person"></ion-icon>\n          Profile\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\chat\src\pages\list-friends\list-friends.html"*/,
        })
        /**
         * @author: KMR
         * @email: yajuve.25.dz@gmail.com
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListFriendsPage);
    return ListFriendsPage;
}());

//# sourceMappingURL=list-friends.js.map

/***/ })

});
//# sourceMappingURL=4.js.map