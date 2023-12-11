// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

interface FiHgMatchers<R = unknown> {
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

declare global {
    namespace jest {
        interface Expect extends FiHgMatchers {}
        interface Matchers<R> extends FiHgMatchers<R> {}
        interface PromiseMatchers extends FiHgMatchers {}
        interface InverseAsymmetricMatchers extends FiHgMatchers {}
    }
}
