import React from "react";
import { Tooltip, Card, Text, Box, theme } from "sriracha-ui";
import Error from "./Error";
import Loading from "./Loading";
import axios from "axios";
import styled from "styled-components";
// import "sriracha-ui/css/main.css";
// import "./styles.css";

const EsoSetItem = ({ name, ...rest }) => {
  const [set, setSet] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`https://eso-sets.herokuapp.com/set/${name}`)
      .then((res) => setSet(res.data))
      .catch((err) => setError(err.message));
  }, [name]);

  return (
    <EsoTooltip {...rest}>
      <Text
        stretch
        taCenter
        color={theme.colors.blue5}
        hvrColor={theme.colors.blue8}
      >
        {name}
      </Text>
      <div className="tooltip">
        {error ? (
          <Error message={error} />
        ) : !set && !error ? (
          <Loading />
        ) : (
          <Card
            w="96%"
            maxW="35rem"
            invert
            shade
            radius="0.5rem"
            p="0.4rem 2rem"
          >
            <Text bold color={theme.colors.amber5}>
              {set?.name}
            </Text>
            <Box stretch h="0.1rem" bg={theme.colors.amber1} />
            <Text>
              <strong>Type:</strong> <span className="type">{set?.type}</span>
            </Text>
            <Box stretch h="0.1rem" bg={theme.colors.amber1} />
            <Text dangerouslySetInnerHTML={{ __html: set?.bonuses }} />
          </Card>
        )}
      </div>
    </EsoTooltip>
  );
};

const EsoTooltip = styled(Tooltip)`
  @import "sriracha-ui/css/main.css";
  .health {
    color: crimson;
  }

  .stamina {
    color: green;
  }

  .magicka {
    color: dodgerblue;
  }

  .armor {
    color: rgb(185, 198, 207);
  }

  .weapon {
    color: rgb(81, 129, 81);
  }

  .spell {
    color: rgb(147, 197, 248);
  }

  .s-pen {
    color: rgb(190, 171, 171);
  }

  .p-pen {
    color: rgb(158, 171, 184);
  }

  .debuff {
    color: rgb(209, 116, 116);
  }

  .buff {
    color: rgb(185, 164, 94);
  }

  .type {
    color: #d7ccc8;
  }
`;

export default EsoSetItem;
