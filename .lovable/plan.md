# Remove "Lives Impacted" from the Home page

## What changes

Two places on the Home page currently show "Lives Impacted":

1. **Impact counters section** — the first counter reads "50,000+ Lives Impacted". Remove this counter, leaving the other three (Villages Reached, Years of Service, Active Programs). Adjust the counter row to 3 columns so the layout stays balanced.
2. **Ribbon under the hero** — a strip that reads "Lives Impacted: Women Empowerment 12,000+ | Health Camps 25,000+ | Education 8,000+ | Sustainable Agriculture 5,000+". Remove this entire strip.

## Files touched

- `src/pages/Home.tsx` — delete the stat entry, remove the ribbon markup, change the counters grid from 4 to 3 columns.

No other pages or data files are affected.
