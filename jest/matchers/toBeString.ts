// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainString, isString } from "../../../core/types/String";

expect.extend(
    {
        toBeString (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isString(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a string`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a string: ${explainString(received)}`);
            }
        }
    }
);
