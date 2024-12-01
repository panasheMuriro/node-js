# Understanding Services

In this lesson, we will:
- Understand what services are in NestJS.
- Learn how to use services to handle business logic.
- Connect services with controllers using dependency injection.
- Create and test a custom service.

## Lesson Goals
- Separate business logic from controllers.
- Understand and implement dependency injection.
- Build and integrate your own service.

## What are Services?
- Definition: Services are classes responsible for handling the business logic of an application. Controllers delegate tasks to services, keeping the controller's role focused on handling HTTP requests and responses.
- Structure: Services are decorated with @Injectable() to indicate they can be injected into other components.
