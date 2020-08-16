import React, { useState } from 'react';
import { Content, Box, ConfigsContent, BoxContent } from './styles';

const Dashboard: React.FC = () => {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [metric, setMetric] = useState('px');

  return (
    <Content>
      <BoxContent>
        <Box
          topLeft={topLeft}
          topRight={topRight}
          bottomLeft={bottomLeft}
          bottomRight={bottomRight}
          metric={metric}
        />
      </BoxContent>
      <ConfigsContent>
        <form>
          <div>
            <label htmlFor="metric">Métrica:</label>
            <select
              name="metric"
              id="metric"
              onChange={(e) => setMetric(e.target.value)}
            >
              <option value="px">Pixels</option>
              <option value="%">Porcentagem</option>
            </select>
          </div>
          <div>
            <label htmlFor="top_left">Top Left:</label>
            <input
              type="number"
              name="top_left"
              id="top_left"
              onChange={(e) => setTopLeft(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="top_right">Top Right:</label>
            <input
              type="number"
              name="top_right"
              id="top_right"
              onChange={(e) => setTopRight(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="bottom_left">Bottom Left:</label>
            <input
              type="number"
              name="bottom_left"
              id="bottom_left"
              onChange={(e) => setBottomLeft(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="bottom_right">Bottom Right:</label>
            <input
              type="number"
              name="bottom_right"
              id="bottom_right"
              onChange={(e) => setBottomRight(Number(e.target.value))}
            />
          </div>
        </form>

        <code>
          <p>
            <span className="property">border-top-left-radius</span>
            <span>: </span>
            <span className="value">{topLeft}</span>
            {metric}
            <span className="white">;</span>
          </p>
          <p>
            <span className="property">border-top-right-radius</span>
            <span>: </span>
            <span className="value">{topRight}</span>
            {metric}
            <span className="white">;</span>
          </p>
          <p>
            <span className="property">border-bottom-left-radius</span>
            <span>: </span>
            <span className="value">{bottomLeft}</span>
            {metric}
            <span className="white">;</span>
          </p>
          <p>
            <span className="property">border-bottom-right-radius</span>
            <span>: </span>
            <span className="value">{bottomRight}</span>
            {metric}
            <span className="white">;</span>
          </p>
        </code>
      </ConfigsContent>
    </Content>
  );
};

export default Dashboard;
