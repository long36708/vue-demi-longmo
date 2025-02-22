import Vue, {getCurrentInstance} from 'vue';

const isVue2 = true;
const isVue3 = false;
const Vue2 = Vue;
const warn = Vue.util.warn;

export const Transition = {
    functional: true,
    render(h, context) {
        const props = context.props;
        const children = context.children;
        const listeners = context.listeners;
        const leaveClass = props.leaveClass || props.leaveFromClass;
        const enterClass = props.enterClass || props.enterFromClass;

        return h(
            'transition',
            {props: Object.assign({}, props, {leaveClass: leaveClass, enterClass: enterClass}), on: listeners},
            children
        );
    },
};
export var Fragment = /*#__PURE__*/ createMockComponent('Fragment')
export var TransitionGroup = /*#__PURE__*/ createMockComponent('TransitionGroup')
export var Teleport = /*#__PURE__*/ createMockComponent('Teleport')
export var Suspense = /*#__PURE__*/ createMockComponent('Suspense')
export var KeepAlive = /*#__PURE__*/ createMockComponent('KeepAlive')

export const resolveComponent = function (name) {
    return name;
};

export const resolveDirective = function (name) {
    return name;
};

export const vShow = 'show';

export const Teleport = undefined;
export const Suspense = undefined;
export const Fragment = undefined;
export const Text = undefined;
export const Comment = undefined;
export const isVNode = undefined;
export const withDirectives = undefined;

export const render = undefined;
export const createVNode = undefined;

function install() {
}

// createApp polyfill
export function createApp(rootComponent, rootProps) {
    let vm;
    const provide = {};
    var app = {
        config: Vue.config,
        use: Vue.use.bind(Vue),
        mixin: Vue.mixin.bind(Vue),
        component: Vue.component.bind(Vue),
        provide: function (key, value) {
            provide[key] = value;
            return this;
        },
        directive: function (name, dir) {
            if (dir) {
                Vue.directive(name, dir);
                return app;
            } else {
                return Vue.directive(name);
            }
        },
        mount: function (el, hydrating) {
            if (!vm) {
                vm = new Vue(
                    Object.assign({propsData: rootProps}, rootComponent, {
                        provide: Object.assign(provide, rootComponent.provide),
                    })
                );
                vm.$mount(el, hydrating);
                return vm;
            } else {
                return vm;
            }
        },
        unmount: function () {
            if (vm) {
                vm.$destroy();
                vm = undefined;
            }
        },
    };
    return app;
}

// Vue 3 components mock
function createMockComponent(name) {
    return {
        setup() {
            throw new Error('[vue-demi] ' + name + ' is not supported in Vue 2. It\'s provided to avoid compiler errors.')
        }
    }
}

// Not implemented https://github.com/vuejs/core/pull/8111, falls back to getCurrentInstance()
export function hasInjectionContext() {
    return !!getCurrentInstance()
}

export {Vue, Vue2, isVue2, isVue3, install, warn};
export * from 'vue';
