import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import tasks from '../../../assets/task';

export default function PopularCard({ isLoading }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(tasks);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard>
          <CardContent>
            <table className="table-auto w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700 text-left">
                <tr>
                  <th className="px-6 py-3 border-b">Task Name</th>
                  <th className="px-6 py-3 border-b">Project Name</th>
                  <th className="px-6 py-3 border-b">Estimated Time</th>
                  <th className="px-6 py-3 border-b">Actual Time</th>
                  <th className="px-6 py-3 border-b">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-800">
                {tasks.map((task, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-6 py-4 border-b">{task.taskName}</td>
                    <td className="px-6 py-4 border-b">{task.productName}</td>
                    <td className="px-6 py-4 border-b">{task.estimatedTime}</td>
                    <td className="px-6 py-4 border-b">{task.actualTime}</td>
                    <td className="px-6 py-4 border-b">
                      <span
                        className={`
                        inline-block px-3 py-1 rounded-full text-sm font-medium
                          ${task.stage === 'Completed' ? 'bg-green-100 text-green-700' : ''}
                          ${task.stage === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${task.stage === 'In Review' ? 'bg-blue-100 text-blue-700' : ''}
                        `}
                      >
                        {task.stage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            {' '}
            <Button size="small" disableElevation>
              View All <ChevronRightOutlinedIcon />{' '}
            </Button>{' '}
          </CardActions>
        </MainCard>
      )}
    </>
  );
}

PopularCard.propTypes = { isLoading: PropTypes.bool };
