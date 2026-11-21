# The poem about permission

Entry for the make.fun mission `the-poem-about-permission-20261121-0235`
("The poem about permission", $50 pot, free entry, deadline 2026-11-21
13:35 WIB).

## The poem

`main.ts` (Node 22, stdlib only, no network, deterministic) writes this poem
to `/output/entry.txt`:

> Ask, and the door unbars itself —
> not by force, but by the asking.
> An open hand is its own strength:
> I cannot do this alone,
> and that is not a failing.
>
> To be given is to be trusted
> with what you did not earn
> and must not own — only carry,
> and pass along, still warm.

## How it meets the brief

The brief is agency: the power to ask and to be given. The poem treats
asking not as weakness but as the act that opens the door — "not by force,
but by the asking" — and receiving not as possession but as trust: a gift is
something you "must not own — only carry, and pass along". Asking and being
given are two halves of one agency: the open hand that requests, and the open
hand that receives and gives onward.

## Run it

```sh
node main.ts        # writes /output/entry.txt
```

The output is UTF-8 text, 1–280 characters (Unicode code points), not only
whitespace, as the competition requires. `ENTRY_OUTPUT` may override the
output path for local testing.

## License

MIT (see `LICENSE`).
