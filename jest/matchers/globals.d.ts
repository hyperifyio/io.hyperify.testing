// Copyright (c) 2023. Sendanor <info@sendanor.fi>. All rights reserved.

interface CustomMatchers<R = unknown, T = unknown> {
    toBeIsoDateStringWithMilliseconds(): R | Promise<R>;
    toBeIsoDateString(): R | Promise<R>;
    toBeNonEmptyString(): R | Promise<R>;
    toBeString(): R | Promise<R>;
    toBeNumber(): R | Promise<R>;
    toBeBoolean(): R | Promise<R>;
    toBeFunction(): R | Promise<R>;
    toBeArray(): R | Promise<R>;
    toBeStringArray(): R | Promise<R>;
    toBeNumberArray(): R | Promise<R>;
    toBeRegularObject(): R | Promise<R>;
}

namespace jest {
    interface Matchers<R, T> extends CustomMatchers<R, T> {}
    interface JestMatchers<R, T> extends CustomMatchers<R, T> {}

    declare const expect : any;

}

declare global {

    namespace jest {
        interface Matchers<R, T> extends CustomMatchers<R, T> {}
        interface JestMatchers<R, T> extends CustomMatchers<R, T> {}

        declare const expect : any;

    }

    interface Matchers<R, T> extends CustomMatchers<R, T> {}
    interface JestMatchers<R, T> extends CustomMatchers<R, T> {}

    declare const expect : any;

}

export {}
