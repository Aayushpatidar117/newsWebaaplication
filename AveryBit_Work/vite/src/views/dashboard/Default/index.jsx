import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../../ui-component/cards/TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import PieChartData from './chart-data/pie-chart-data';
import { Box } from '@mui/material';

import Typography from '@mui/material/Typography';
import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);

  console.log(PieChartData.series[0]);

  useEffect(() => {
    setLoading(false);
  }, []);
  const totalTask = 1;
  return (
    <Grid container spacing={gridSpacing} sx={{ width: '100%', margin: '0' }}>
      <Grid size={8}>
        <Grid container spacing={5} sx={{ mx: 'auto' }}>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <EarningCard isLoading={isLoading} data={totalTask} title={'Total Tasks '} bgcolor={'#F7CFD8'} />
          </Grid>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <EarningCard isLoading={isLoading} data={totalTask} title={'Completed Task'} bgcolor={'#F4F8D3'} />
          </Grid>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <EarningCard isLoading={isLoading} data={totalTask} title={'In Progress'} bgcolor={'#A6D6D6'} />
          </Grid>
          {/* <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
            <Grid container spacing={gridSpacing}>
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} sx={{ width: '100%', mt: 2 }}  flex={wrap} justifyContent={'center'} alignItems={'center'}> */}
      <Grid
        container
        spacing={2}
        sx={{ width: '100%', mt: 2 }}
        display={'flex'}
        flexWrap={wrap}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {/* bar chart */}
        <Grid
          item
          xs={12}
          md={7.5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '100%', md: '60%' }
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '1000px', px: 1 }}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Box>
        </Grid>

        {/* pie Chart */}
        <Grid
          item
          xs={12}
          md={4.5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '100%', md: '35%' }
          }}
        >
          <Box
            sx={{
              bgcolor: 'white',
              width: '100%',
              height: { xs: '28rem', sm: '34rem', md: '39rem' },
              borderRadius: '1rem',
              overflow: 'auto',
              p: 2
            }}
          >
            <Typography variant="subtitle1">Total Tasks Summary</Typography>
            <Chart options={PieChartData.options} series={PieChartData.series} type={PieChartData.type} />
            <Grid>
              <Grid container justifyContent={'start'} alignItems={'center'} gap={'1.25rem'}>
                <Grid sx={{ width: '20px', height: '18px', bgcolor: '#FF4560', borderRadius: '30%', margin: '5px' }}></Grid>
                <Grid sx={{ fontSize: '12px', opacity: '0.6' }}>On Time</Grid>
              </Grid>
              <Grid container justifyContent={'start'} alignItems={'center'} gap={'1.25rem'}>
                <Grid sx={{ width: '20px', height: '18px', bgcolor: '#00E396', borderRadius: '30%', margin: '5px' }}></Grid>
                <Grid sx={{ fontSize: '12px', opacity: '0.6' }}>Before Time</Grid>
              </Grid>
              <Grid container justifyContent={'start'} alignItems={'center'} gap={'1.25rem'}>
                <Grid sx={{ width: '20px', height: '18px', bgcolor: '#FEB019', borderRadius: '30%', margin: '5px' }}></Grid>
                <Grid sx={{ fontSize: '12px', opacity: '0.6' }}>Delayed Time</Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Task Loader */}
      <Grid item xs={12} md={6} width={'95%'} sx={{ mx: 'auto' }}>
        <PopularCard isLoading={isLoading} />
      </Grid>
    </Grid>
  );
}

import Chart from 'react-apexcharts';
import { alpha } from '@mui/material';
import { wrap } from 'lodash-es';
