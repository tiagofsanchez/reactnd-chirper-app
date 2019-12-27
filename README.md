# Chirper Project

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

As mentioned, this was a code-along project, and here I will try to higlight the stuff that I have learnt as well as the biggest challenges I come across

## First impressions

WOW! this was the most challening project I have done thus far. I have to admit that I am strugling to learn Redux - 2 weeks in trying to learn Redux and I would be lying if I told you that fully comphreend how it works.

Don't get me wrong I do undersant the reasons why I am using it, specially after having finished my first [project](https://github.com/tiagofsanchez/reactnd-project-myreads-starter) where I took it to litererall the following statement:

> Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

Considering the design implemented on MyReads project I totally understand why Redux exists. In my implementation I have considered one single source of truth to manage the app state and was passing the state as props to inumerous components. Everytime that the user interected with the UI I was using callback funtions to update my state and rerender the components that were impacted by that change...ufff, it was a lot of hard work.

When I learnt that redux would solve this problem for me I was over the moon. I love the concept of having state management tool that will help me manage the state to create a single source of thruth. However, this was as been a hell of a ride... Redux as a concept is fine to grasp, and according to redux documentation:

1. It is a single source of truth and the state of your whole application is stored in an object tree within a single store
2. State is read-only and the only way to change the state is to emit an action, an object describing what happened
3. Changes are made with pure functions and to specify how the state tree is transformed by actions, you write reducers.

Effectively you can connect any component that you want to your store. That component will be able to "consume" the information from your state and rerender depending on the changes. On the other hand, by connecting your component to the store you will have access to a function called `dispatch` that will enable, depending on the UI interaction, to make changes to the store and as a result rerender the components for you.

The other thing that is absolutely amazing about Redux is the time traveling feature. It literaly allows you to time travel in order to better understand what happened to your store, what action trigered it and that will be really helpfull everytime you need to debug your application.

To be honest, easier said than done, so lets have a look to a couple of examples on our Tweeter app.

## Implementation, how do I think about this

No doubt that the building guidelines from the Udacity team are great:

1. Identify What Each View Should Look Like
2. Break Each View Into a Hierarchy of Components
3. Determine What Events Happen in the App
4. Determine What Data Lives in the Store

For me these guidelines were extremely usefull, and I often went back to check them, however I felt that I was missing a check list to help me navigate the, sorry to say, immense Redux boilerplate. Please bear in mind that I am not critisition Redux as I def don't have any authority on the matter, I am just sharing my views from a rookie standpoint.

### Things that you have to do:

> DISCLAIMER: I am not trying to teach anyone to Redux (I don't have authority) but rather trying to put together a "checklist" that could help anyone, me included.

Before starting you will need to install a couple of things:
. redux: `yarn add redux`
. react-redux: `yarn add react-redux`
. thunk: `yarn add redux-thunk`

Make sure that you relaunch your app after installing.
