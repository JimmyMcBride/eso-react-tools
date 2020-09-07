import React from "react";
import { Card, theme } from "sriracha-ui";
import EsoSetItem from "../Tooltip";
import styled from "styled-components";
import { baseStyles } from "../baseStyles";

export default function EsoGearTable({ data }) {
  return (
    <EsoGearWrapper invert bg={theme.colors.gray9} p="1rem" radius="0.3rem">
      <table className="gear-table">
        <thead>
          <tr className="head-row">
            <th>Gear</th>
            <th>Set</th>
            <th>Weight</th>
            <th>Trait</th>
            <th>Enchantment</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id} className="data-row">
                <td>{item.gear}</td>
                <td>
                  <EsoSetItem name={item.set} ttM="-2rem 0 0 14.5rem" />
                </td>
                <td>{item.weight}</td>
                <td>{item.trait}</td>
                <td>{item.enchantment}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </EsoGearWrapper>
  );
}

const EsoGearWrapper = styled(Card)`
  ${baseStyles}
  * {
    border-radius: 0.2rem;
  }

  td {
    padding: 0.5rem;
  }

  .head-row {
    width: 100%;
    background: #ff8f00;
  }

  .data-row {
    width: 100%;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 0.5rem;
  }

  .gear-table {
    width: 55rem;
  }
`;
