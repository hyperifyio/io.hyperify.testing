// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainFunction, isFunction } from "../../../core/types/Function";

expect.extend(
    {
        toBeFunction (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isFunction(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a function`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a function: ${explainFunction(received)}`);
            }
        }
    }
);
