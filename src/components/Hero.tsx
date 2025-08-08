import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(45, 212, 191, 0.1) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack spacing={4} maxWidth="800px">
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #2DD4BF 30%, #805AD5 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SURYA V
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                color="text.primary"
                sx={{ mb: 2 }}
              >
                Full-Stack Software Engineer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: '600px' }}
              >
                Building scalable enterprise applications with JavaScript, React.js, Node.js, and cloud technologies.
                Passionate about creating impactful solutions and leading cross-functional teams.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="mailto:suryavardhan28@gmail.com"
                  sx={{
                    borderRadius: '24px',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<GitHub />}
                  href="https://github.com/Suryavardhan28"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: '24px',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: '24px',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  LinkedIn
                </Button>
              </Stack>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={itemVariants}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Box
                sx={{
                  width: '30px',
                  height: '50px',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '15px',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '8px',
                  },
                }}
              />
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
