import React from "react";
import { Card, theme } from "sriracha-ui";
import { EsoSetItem } from "../Tooltip";
import "./styles.css";

export default function EsoGearTable({ data }) {
  return (
    <Card invert bg={theme.colors.gray9} p="1rem" radius="0.3rem">
      <table style={{ width: "550px" }}>
        <thead>
          <tr style={{ width: "100%", background: theme.colors.amber8 }}>
            <th>Gear</th>
            <th>Set</th>
            <th>Weight</th>
            <th>Trait</th>
            <th>Enchantment</th>
          </tr>
          {data.map((item) => {
            return (
              <tr
                key={item.id}
                style={{
                  width: "100%",
                  background: theme.colors.whiteAlpha2,
                  borderRadius: "0.5rem",
                }}
              >
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
    </Card>
  );
}
