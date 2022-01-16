#!/bin/sh

PUPPETEER_PRODUCT=chrome deno run -A --unstable https://deno.land/x/puppeteer@9.0.2/install.ts
deno run \
    --allow-net \
    --unstable \
    --allow-env \
    --allow-write \
    --allow-read \
    --allow-run \
    mod.ts