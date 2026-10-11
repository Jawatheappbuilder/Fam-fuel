# Family Fuel

Local-first Australian family recipe, meal-planning and shopping-list PWA.

## Run

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create a GitHub repository and upload these files (or push with Git).
2. In Vercel, select **Add New Project**, import the repository.
3. Vercel should detect Vite; build command `npm run build`, output directory `dist`.
4. Deploy over HTTPS and use your browser's **Add to Home screen / Install app** option.

## Data and privacy

Recipes, plans and shopping items live in IndexedDB on **this device only**. They are not synchronised across phones. Back up via Settings → Export backup; restore from Settings → Restore backup. Browser storage can be cleared by the operating system, so keep a backup file elsewhere. No user account or API key required.

## Limitations / roadmap

- Meal discovery is local rule-based rediscovery, not AI generation yet.
- Starter nutrition values are rough illustrative estimates and not validated against a food database.
- Shopping list combines identical ingredient names and units, but does not convert between units or account for package sizes.
- Rebuilding a list preserves manual items but resets planned-ingredient checkmarks.
- Planner displays the next seven days; existing future plans are retained.
- Add shared accounts, accurate nutrition database, recipe photo import, supermarket pricing and conflict-aware syncing in later versions.

<!-- Trigger initial Vercel deployment -->
