import React from "react";
// import { Tooltip, Card, Text, Box, theme } from "sriracha-ui";
import { Tooltip, Text, theme } from "sriracha-ui";
// import Error from "./Error";
// import Loading from "./Loading";
// import axios from "axios";
// import "sriracha-ui/css/main.css";
// import "./styles.css";

const EsoSetItem = ({ name }) => {
  // const [set, setSet] = React.useState(null);
  // const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   axios
  //     .get(`https://eso-sets.herokuapp.com/set/${name}`)
  //     .then((res) => setSet(res.data))
  //     .catch((err) => setError(err.message));
  // }, [name]);

  return (
    // <Tooltip {...rest}>
    //   <Text
    //     stretch
    //     taCenter
    //     color={theme.colors.blue5}
    //     hvrColor={theme.colors.blue8}
    //   >
    //     {name}
    //   </Text>
    //   <div className="tooltip">Text goes here</div>
    // </Tooltip>
    <div>{name}</div>
  );
};

// {
//   error ? (
//     <Error message={error} />
//   ) : !set && !error ? (
//     <Loading />
//   ) : (
//     <Card w="96%" maxW="35rem" invert shade radius="0.5rem" p="0.4rem 2rem">
//       Text
//       {/* <Text bold color={theme.colors.amber5}>
//               {set?.name}
//             </Text>
//             <Box stretch h="0.1rem" bg={theme.colors.amber1} />
//             <Text>
//               <strong>Type:</strong> <span className="type">{set?.type}</span>
//             </Text>
//             <Box stretch h="0.1rem" bg={theme.colors.amber1} /> */}
//       {/* <Text dangerouslySetInnerHTML={{ __html: set?.bonuses }} /> */}
//     </Card>
//   )
// }

export default EsoSetItem;
