
import React from "react";
import classes from "./styles.module.scss";
import StarRating from "@/app/Components/Rating";
import Image from "next/image";

const CustomerCard = React.memo(({ name, role, score, profile, customerKey }) => (
    <div className={classes.customer} key={customerKey}>
        <Image
            src={profile}
            alt={name}
            className={classes.profile}
            width={100}
            height={100}
            loading="lazy"
        />
        <p>{name}</p>
        <p>{role}</p>
        <StarRating value={score} />
    </div>
));

CustomerCard.displayName = "CustomerCard";

export default CustomerCard;
