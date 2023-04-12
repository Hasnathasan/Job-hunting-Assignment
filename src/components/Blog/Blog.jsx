import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-violet-50 py-10">
        <h2 className="text-3xl text-center font-bold">Blog Section</h2>
      </div>
      <div className="my-8 p-4 sm:p-8 rounded">
            <h2 className="text-2xl font-bold mb-2">What is the difference between state and prop in React?</h2>
            <p className="text-lg font-medium mb-10">Ans: In React, state manage internel data in a component and can be changed by 
                the component using the setState() method. On the other hand,
                props are read-only data passed down from a parent component and 
                cannot be changed by the component.
            </p>

            <h2 className="text-2xl font-bold mb-2">How does useState work?</h2>
            <p className="text-lg font-medium mb-10">Ans: The useState hook adds state to a functional component in React. It initializes and updates state, 
                and merges the updated state with the previous state when re-rendering the component.
            </p>
            
            <h2 className="text-2xl font-bold mb-2">What is the Purpose of useEffect other than fetching data?</h2>
            <p className="text-lg font-medium mb-10">Ans: It can be used to update the document title, add and remove event listeners, set up subscriptions, 
                and perform cleanup operations. Essentially, useEffect allows you to perform side effects in your 
                components, such as interacting with the browser DOM, in a declarative way.
            </p>

            <h2 className="text-2xl font-bold mb-2">How Does React work?</h2>
            <p className="text-lg font-medium mb-10">React is a JavaScript library that helps build user interfaces. It works by creating a 
                "virtual" version of the web page, making updates to it when necessary, and then 
                updating the actual web page. React uses a declarative approach to building UI components, 
                which makes them easier to maintain and scale.
            </p>
        </div>
    </div>
  );
};

export default Blog;
