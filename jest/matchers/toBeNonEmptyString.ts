// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainNonEmptyString, isNonEmptyString } from "../../../core/types/String";

expect.extend(
    {
        toBeNonEmptyString (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isNonEmptyString(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a non-empty string`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a non-empty string: ${explainNonEmptyString(received)}`);
            }
        }
    }
);
