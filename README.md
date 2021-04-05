This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This website uses [Swell](https://www.swell.is/), a headless ecommerce platform, to power its ecommerce capabilities. To begin, [sign up for Swell](https://swell.store/signup) and put yourself on the free starter plan to gain access to the developer sandbox.

Once you've done so, you can integrate Swell with the website by using your Swell store's API keys. When logged in to Swell, use the left-hand navigation to select Settings > API keys. You will be using your store ID, along with one of the public and secret keys that have been generated.

Then, create a next.config.js file in the root folder. Then, add the following code, and replace each value with your store's ID, secret key, and public key, respectively:
```js
module.exports = {
  env: {
    STORE_ID: '',
    STORE_SECRET_KEY: '',
    STORE_PUBLIC_KEY: '',
  },
};
```

After doing this, you can begin to run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
