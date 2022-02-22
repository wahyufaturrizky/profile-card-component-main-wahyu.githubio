import "style/Card.css";
import { ColorBasePrimaryEnum } from "style/Color";

interface CardPropsInterface {
  username?: string;
  age?: string;
  city?: string;
  numberFollower?: string;
  numberLike?: string;
  numberPhoto?: string;
  labelFollower?: string;
  labelLike?: string;
  labelPhoto?: string;
}

const Card = (props: CardPropsInterface) => {
  return (
    <div className="container-card">
      <div className="container-card-content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: 18,
              color: ColorBasePrimaryEnum.veryDarkDesaturatedBlue,
            }}
            className="font-800"
          >
            {props.username}
          </h3>
          <p
            className="font-500"
            style={{
              fontSize: 18,
              marginLeft: 8,
              color: ColorBasePrimaryEnum.darkGrayishBlue,
            }}
          >
            {props.age}
          </p>
        </div>
        <p
          className="font-500"
          style={{
            textAlign: "center",
            marginTop: 16,
            color: ColorBasePrimaryEnum.darkGrayishBlue,
          }}
        >
          {props.city}
        </p>

        <div className="container-footer-card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              className="font-800"
              style={{
                color: ColorBasePrimaryEnum.veryDarkDesaturatedBlue,
                fontSize: 18,
              }}
            >
              {props.numberFollower}
            </p>
            <p
              className="font-500"
              style={{
                color: ColorBasePrimaryEnum.darkGrayishBlue,
                marginTop: 8,
              }}
            >
              {props.labelFollower}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              className="font-800"
              style={{
                color: ColorBasePrimaryEnum.veryDarkDesaturatedBlue,
                fontSize: 18,
              }}
            >
              {props.numberLike}
            </p>
            <p
              className="font-500"
              style={{
                color: ColorBasePrimaryEnum.darkGrayishBlue,
                marginTop: 8,
              }}
            >
              {props.labelLike}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              className="font-800"
              style={{
                color: ColorBasePrimaryEnum.veryDarkDesaturatedBlue,
                fontSize: 18,
              }}
            >
              {props.numberPhoto}
            </p>
            <p
              className="font-500"
              style={{
                color: ColorBasePrimaryEnum.darkGrayishBlue,
                marginTop: 8,
              }}
            >
              {props.labelPhoto}
            </p>
          </div>
        </div>
      </div>
      <img
        height={96}
        width={96}
        className="avatar-picture"
        src={require("../assets/images/image-victor.jpg")}
        alt="avtatar-username"
      />
    </div>
  );
};

export default Card;
