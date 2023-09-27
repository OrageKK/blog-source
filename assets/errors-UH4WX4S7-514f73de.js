import{P as a,h as o}from"./register-CZKN5SKP-6065c320.js";import"./app-987b0a6e.js";var s={O(){return new a({code:o.BadSignature,reason:"missing WEBVTT file header",line:1})},D(n,e){return new a({code:o.BadTimestamp,reason:`cue start timestamp \`${n}\` is invalid on line ${e}`,line:e})},E(n,e){return new a({code:o.BadTimestamp,reason:`cue end timestamp \`${n}\` is invalid on line ${e}`,line:e})},F(n,e,r){return new a({code:o.BadTimestamp,reason:`cue end timestamp \`${e}\` is greater than start \`${n}\` on line ${r}`,line:r})},P(n,e,r){return new a({code:o.BadSettingValue,reason:`invalid value for cue setting \`${n}\` on line ${r} (value: ${e})`,line:r})},Q(n,e,r){return new a({code:o.UnknownSetting,reason:`unknown cue setting \`${n}\` on line ${r} (value: ${e})`,line:r})},R(n,e,r){return new a({code:o.BadSettingValue,reason:`invalid value for region setting \`${n}\` on line ${r} (value: ${e})`,line:r})},S(n,e,r){return new a({code:o.UnknownSetting,reason:`unknown region setting \`${n}\` on line ${r} (value: ${e})`,line:r})},G(n,e){return new a({code:o.BadFormat,reason:`format missing for \`${n}\` block on line ${e}`,line:e})}};export{s as ParseErrorBuilder};