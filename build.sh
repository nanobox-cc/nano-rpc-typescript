#!/bin/bash

yarn add @openapitools/openapi-generator-cli @nanobox/openapi-nano-spec --dev
yarn openapi-generator-cli generate -g typescript-node -i ./node_modules/@nanobox/openapi-nano-spec/spec/openapi.yaml -o ./clients/typescript -c config-typescript.json
