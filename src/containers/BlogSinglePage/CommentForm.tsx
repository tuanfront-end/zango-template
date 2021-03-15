import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";
import React from "react";

const CommentForm = () => {
  return (
    <div>
      <h2 className="text-lg uppercase font-medium mb-8 text-gray-900 dark:text-gray-100">
        Leave your thought
      </h2>
      <form action="" className="space-y-5">
        <Textarea placeholder="Enter your comment*" />
        <Input placeholder="Enter Website*" />
        <div className="mb-6 grid grid-cols-2 gap-5">
          <Input placeholder="Enter Name*" />
          <Input placeholder="Enter Email*" />
        </div>
        <ButtonPrimary url="">post comment</ButtonPrimary>
      </form>
    </div>
  );
};

export default CommentForm;
