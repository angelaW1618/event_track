<h1 align="center">Event Track</h1>


## <div>Description</div>
A comprehensive event management platform with a strong emphasis on user experience, security, and functionality.

> **Note:** Make sure to select or create a new category when creating a new event.

## <a name="table">Table of Contents</a>

1. [Technologies](#technology)
3. [Features](#features)
4. [Getting Started](#start)
5. [Learn More](#learn)
6. [Deploy on Vercel](#deploy)


## <a name="technology">Technologies</a>
<div>
  <img src="https://img.shields.io/badge/-Next_JS_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
</div>
  
- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing
- MongoDB

## <a name="features">Features</a>

### Authentication with Clerk

#### Purpose
Clerk provides authentication services, ensuring users can sign up, log in, and manage their profiles securely. This integration simplifies the complex aspects of user authentication and session management.

#### Benefits
- Enhances security and user experience by offering features like two-factor authentication, social login options, and easy user management.

### CRUD Operations for Events

- **Create Events:** Users can add new events by inputting essential details. This feature is crucial for event organizers wanting to publicize their events.
- **Read Events:** A catalog view of all events allows users to browse through events and access detailed information about each one.
- **Update Events:** Event organizers can update event details to reflect changes, such as a new event date or location.
- **Delete Events:** Provides the ability to remove events, keeping the platform's offerings current and relevant.

### Advanced Event Features

- **Related Events:** Enhances user engagement by suggesting events similar to those a user is currently viewing, potentially increasing participation in other events.
- **Organized Events:** Displays events a user has created on their profile, making it easy for them to manage their events and for attendees to find events by the same organizer.
- **Search & Filter:** A robust search and filtering system allows users to quickly find events that match their interests, date preferences, or location.

### Dynamic Categorization

- **New Category:** The ability to add new event categories dynamically helps the platform adapt to emerging trends and user interests.

### Integration with Stripe for Payments

- **Checkout and Pay:** Integrates Stripe for handling payments, offering a secure and smooth checkout process for event registrations or ticket purchases.
- **Event Orders:** A comprehensive system to manage orders, providing users and organizers with a clear overview of transactions related to events.

### Enhanced Order Management

- **Search Orders:** Makes it easy for users and administrators to track and manage event orders through a quick search functionality.

### Code Architecture and Reusability

While not a user-facing feature, emphasizing code architecture and reusability is crucial for maintaining and scaling the platform. Effective use of design patterns, modular coding practices, and documentation ensures that the platform can evolve over time without significant rework.


## <a name="start">Getting Started</a>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Make sure to create your own .env file and fill it with your keys and secrets for webhook access.

## <a name="learn">Learn More</a>
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## <a name="deploy">Deploy on Vercel</a>

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
