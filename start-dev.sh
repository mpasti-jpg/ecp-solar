#!/bin/bash
export PATH="/tmp/node-v22.14.0-darwin-arm64/bin:$PATH"
cd "$(dirname "$0")"
npm run dev
