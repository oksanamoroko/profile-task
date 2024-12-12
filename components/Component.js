'use client'

import { useState } from "react";
import Avatar from "./Avatar";
import ProfileCard from "./ProfileCard";
import Text from "./Text";
import ToggleButton from "./ToggleButton";
import Menu from "./Menu";

const Component = () => {
    const [reversed, setReversed] = useState(false);
    
  
    const handleToggle = () => setReversed(!reversed);
  
    return (
      <div className="max-w-lg mx-auto">
        <ProfileCard reversed={reversed}>
          <Avatar
            avatarSrc="/avatar.png"
            badgeSrc="/badge.png" 
            badgeNumber="4881"
            reversed={reversed}
          />
          <Text
            name="Anna Effective"
            description="Double your income with me!"
          />
          <Menu></Menu>
        </ProfileCard>
        <ToggleButton onClick={handleToggle} />
      </div>
  
    );
  };
  
  export default Component;