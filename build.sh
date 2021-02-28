#!/bin/bash

yarn add @openapitools/openapi-generator-cli @nanobox/openapi-nano-spec@3.0.4 --dev &&
yarn openapi-generator-cli generate -g typescript -i ./node_modules/@nanobox/openapi-nano-spec/spec/openapi.yaml -o . -c config-typescript.json &&
yarn
