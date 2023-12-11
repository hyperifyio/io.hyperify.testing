// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainArray, isArray } from "../../../core/types/Array";

expect.extend(
    {
        toBeArray (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isArray(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be an array`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be an array: ${explainArray(received)}`);
            }
        }
    }
);
