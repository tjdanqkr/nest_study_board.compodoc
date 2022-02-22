'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-mongo-eng-study documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-42ddf8235b71cc69533f170deab61bb1588c95929e99d343689420fbab84234a4dc45d69eca067476e7eb71fc82123f56eb5c3ad44a61ce9e18827a740d426a1"' : 'data-target="#xs-controllers-links-module-AuthModule-42ddf8235b71cc69533f170deab61bb1588c95929e99d343689420fbab84234a4dc45d69eca067476e7eb71fc82123f56eb5c3ad44a61ce9e18827a740d426a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-42ddf8235b71cc69533f170deab61bb1588c95929e99d343689420fbab84234a4dc45d69eca067476e7eb71fc82123f56eb5c3ad44a61ce9e18827a740d426a1"' :
                                            'id="xs-controllers-links-module-AuthModule-42ddf8235b71cc69533f170deab61bb1588c95929e99d343689420fbab84234a4dc45d69eca067476e7eb71fc82123f56eb5c3ad44a61ce9e18827a740d426a1"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-42ddf8235b71cc69533f170deab61bb1588c95929e99d343689420fbab84234a4dc45d69eca067476e7eb71fc82123f56eb5c3ad44a61ce9e18827a740d426a1"' : 'data-target="#xs-injectables-links-module-AuthModule-42ddf8235b71cc69533f170deab61bb1588c95929e99d343689420fbab84234a4dc45d69eca067476e7eb71fc82123f56eb5c3ad44a61ce9e18827a740d426a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-42ddf8235b71cc69533f170deab61bb1588c95929e99d343689420fbab84234a4dc45d69eca067476e7eb71fc82123f56eb5c3ad44a61ce9e18827a740d426a1"' :
                                        'id="xs-injectables-links-module-AuthModule-42ddf8235b71cc69533f170deab61bb1588c95929e99d343689420fbab84234a4dc45d69eca067476e7eb71fc82123f56eb5c3ad44a61ce9e18827a740d426a1"' }>
                                        <li class="link">
                                            <a href="injectables/AdminStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoryModule-398890faa9376535d952d4cf4816cd31f917a78e3263334ef4e380f64f483cc4cad8157cd6e1a126ba53f984c95993865a526ef4ef04a4f7eb3547834e9a1e2c"' : 'data-target="#xs-controllers-links-module-CategoryModule-398890faa9376535d952d4cf4816cd31f917a78e3263334ef4e380f64f483cc4cad8157cd6e1a126ba53f984c95993865a526ef4ef04a4f7eb3547834e9a1e2c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-398890faa9376535d952d4cf4816cd31f917a78e3263334ef4e380f64f483cc4cad8157cd6e1a126ba53f984c95993865a526ef4ef04a4f7eb3547834e9a1e2c"' :
                                            'id="xs-controllers-links-module-CategoryModule-398890faa9376535d952d4cf4816cd31f917a78e3263334ef4e380f64f483cc4cad8157cd6e1a126ba53f984c95993865a526ef4ef04a4f7eb3547834e9a1e2c"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoryModule-398890faa9376535d952d4cf4816cd31f917a78e3263334ef4e380f64f483cc4cad8157cd6e1a126ba53f984c95993865a526ef4ef04a4f7eb3547834e9a1e2c"' : 'data-target="#xs-injectables-links-module-CategoryModule-398890faa9376535d952d4cf4816cd31f917a78e3263334ef4e380f64f483cc4cad8157cd6e1a126ba53f984c95993865a526ef4ef04a4f7eb3547834e9a1e2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-398890faa9376535d952d4cf4816cd31f917a78e3263334ef4e380f64f483cc4cad8157cd6e1a126ba53f984c95993865a526ef4ef04a4f7eb3547834e9a1e2c"' :
                                        'id="xs-injectables-links-module-CategoryModule-398890faa9376535d952d4cf4816cd31f917a78e3263334ef4e380f64f483cc4cad8157cd6e1a126ba53f984c95993865a526ef4ef04a4f7eb3547834e9a1e2c"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionModule.html" data-type="entity-link" >QuestionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-QuestionModule-cbcbb4870b8858bf6ad408258175fb4b044d975ce8a5706cf751ba62e3c4d13bfbd73b7a48480b3a8f6cef480c40a411144693814ba1f6e4f63bb517812bf4fa"' : 'data-target="#xs-controllers-links-module-QuestionModule-cbcbb4870b8858bf6ad408258175fb4b044d975ce8a5706cf751ba62e3c4d13bfbd73b7a48480b3a8f6cef480c40a411144693814ba1f6e4f63bb517812bf4fa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-QuestionModule-cbcbb4870b8858bf6ad408258175fb4b044d975ce8a5706cf751ba62e3c4d13bfbd73b7a48480b3a8f6cef480c40a411144693814ba1f6e4f63bb517812bf4fa"' :
                                            'id="xs-controllers-links-module-QuestionModule-cbcbb4870b8858bf6ad408258175fb4b044d975ce8a5706cf751ba62e3c4d13bfbd73b7a48480b3a8f6cef480c40a411144693814ba1f6e4f63bb517812bf4fa"' }>
                                            <li class="link">
                                                <a href="controllers/QuestionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-QuestionModule-cbcbb4870b8858bf6ad408258175fb4b044d975ce8a5706cf751ba62e3c4d13bfbd73b7a48480b3a8f6cef480c40a411144693814ba1f6e4f63bb517812bf4fa"' : 'data-target="#xs-injectables-links-module-QuestionModule-cbcbb4870b8858bf6ad408258175fb4b044d975ce8a5706cf751ba62e3c4d13bfbd73b7a48480b3a8f6cef480c40a411144693814ba1f6e4f63bb517812bf4fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuestionModule-cbcbb4870b8858bf6ad408258175fb4b044d975ce8a5706cf751ba62e3c4d13bfbd73b7a48480b3a8f6cef480c40a411144693814ba1f6e4f63bb517812bf4fa"' :
                                        'id="xs-injectables-links-module-QuestionModule-cbcbb4870b8858bf6ad408258175fb4b044d975ce8a5706cf751ba62e3c4d13bfbd73b7a48480b3a8f6cef480c40a411144693814ba1f6e4f63bb517812bf4fa"' }>
                                        <li class="link">
                                            <a href="injectables/QuestionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/QuestionController.html" data-type="entity-link" >QuestionController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateQuestionDto.html" data-type="entity-link" >CreateQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link" >Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/SigninAuthDto.html" data-type="entity-link" >SigninAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenDto.html" data-type="entity-link" >TokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateQuestionDto.html" data-type="entity-link" >UpdateQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminAuthGuard.html" data-type="entity-link" >AdminAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminStrategy.html" data-type="entity-link" >AdminStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionService.html" data-type="entity-link" >QuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThrottlerBehindProxyGuard.html" data-type="entity-link" >ThrottlerBehindProxyGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});