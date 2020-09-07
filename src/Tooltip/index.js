import React from "react";
// import { Tooltip, Card, Text, Box, theme } from "sriracha-ui";
import { Tooltip, Text, theme } from "sriracha-ui";
// import Error from "./Error";
// import Loading from "./Loading";
// import axios from "axios";
// import "sriracha-ui/css/main.css";
// import "./styles.css";

const EsoSetItem = () => {
  // const [set, setSet] = React.useState({
  //   id: 515,
  //   name: "Zaan",
  //   type: "Monster Helm Set",
  //   bonuses:
  //     "<strong>(1 piece)</strong> <span>Adds 833 <span class='spell'>Spell Critical</span></span><br> <strong>(2 piece)</strong> <span>When you damage a nearby enemy with a Light or Heavy Attack, you have a 33% chance to create a beam of fire that will connect you to your enemy. The beam deals 2010 Flame damage every 1 second to your enemy for 6 seconds. Every second, this damage increases by 100%. The beam is broken if the enemy moves 8 meters away from you. This effect can occur every 18 seconds.</span><br>",
  // });
  // const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   axios
  //     .get(`https://eso-sets.herokuapp.com/set/${name}`)
  //     .then((res) => setSet(res.data))
  //     .catch((err) => setError(err.message));
  // }, [name]);

  return (
    <Tooltip>
      <Text
        stretch
        taCenter
        color={theme.colors.blue5}
        hvrColor={theme.colors.blue8}
      >
        {/* {name} */}Text
      </Text>
      <div className="tooltip">Tooltip</div>
    </Tooltip>
  );
};

// {
//   error ? (
//     <Error message={error} />
//   ) : !set && !error ? (
//     <Loading />
//   ) : (
//     <Card
//       key={set?.id}
//       w="96%"
//       maxW="35rem"
//       invert
//       shade
//       radius="0.5rem"
//       p="0.4rem 2rem"
//     >
//       <Text bold color={theme.colors.amber5}>
//         {set?.name}
//       </Text>
//       <Box stretch h="0.1rem" bg={theme.colors.amber1} />
//       <Text>
//         <strong>Type:</strong> <span className="type">{set?.type}</span>
//       </Text>
//       <Box stretch h="0.1rem" bg={theme.colors.amber1} />
//       {/* <Text dangerouslySetInnerHTML={{ __html: set?.bonuses }} /> */}
//     </Card>
//   );
// }

export default EsoSetItem;
