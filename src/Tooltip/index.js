import React from "react";
import { Tooltip, Card, Text, Box, theme } from "sriracha-ui";
import axios from "axios";
import "sriracha-ui/css/main.css";
import "./styles.css";

const EsoSet = ({ name, children }) => {
  const [set, setSet] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(`https://eso-sets.herokuapp.com/set/${name}`)
      .then((res) => setSet(res.data));
  }, [name]);
  return (
    <Tooltip>
      {children}
      <div className="tooltip">
        <Card
          key={set?.id}
          w="96%"
          maxW="35rem"
          invert
          shade
          radius="0.5rem"
          p="0.4rem 2rem"
        >
          <Text bold lf color={theme.colors.amber5}>
            {set?.name}
          </Text>
          <Box stretch h="0.1rem" bg={theme.colors.amber1} />
          <Text>
            <strong>Type:</strong>{" "}
            <span style={{ color: theme.colors.brown2 }}>{set?.type}</span>
          </Text>
          <Box stretch h="0.1rem" bg={theme.colors.amber1} />
          <Text dangerouslySetInnerHTML={{ __html: set?.bonuses }} />
        </Card>
      </div>
    </Tooltip>
  );
};

export default EsoSet;
