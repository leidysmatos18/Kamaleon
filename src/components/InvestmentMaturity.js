import { Box, Container, Grid, Typography } from "@mui/material";
import Cardinv from "./elements/Cardinv";
import R1 from "../statics/cards/R1.png";
import R2 from "../statics/cards/R2.png";
import R3 from "../statics/cards/R3.png";

function InvestmentMaturity({id}) {
	const datosCards = [
		{
			titulo: "Fundamental",
			icon: R1,
			text: 'Projects that through blockchain applied technology solve clear market problems, are at a consolidated stage and project mass adoption. Holding period for these investments is expected to be long-term.',
			link: "#",
		},
		{
			titulo: "Early stage",
			icon: R2,
			text: 'Projects that present innovative solutions to market problems, have clear competitive advantages and are led by solid teams. The project has a proven MVP or a developed product and is prior to entering a growth stage. Holding period for these investments is expected to be short-term.',
			link: "#",
		},
		{
			titulo: "Incubator",
			icon: R3,
			text: 'Projects with an undeveloped idea and initial investment by a solid team seeking market validation. Investments will occur at pre-seed, seed and private sale rounds and holding period is analyzed on a project specific basis.',
			link: "#",
		},
	];
	return (
		<>
			<Container maxWidth="100%" id={id} sx={{
				background: "#F5F5F5",
			}}>
				<Container maxWidth="xl"
					sx={{
						paddingY:{xs:'30px', md:'30px', lg:'60px'}
					}}
				>
					<Box Component="div">
						<Typography
							sx={{
								color: "botonHeader.main",
								fontWeight: "bold",
								fontSize: "27px",
								marginY: "20px",
							}}
						>
							INVESTMENT MATURITY
						</Typography>
						<Box sx={{ margin: "10px 0px" }}>
							<hr className="hr-barra" />
						</Box>
					</Box>

					<Grid container
						justifyContent="center"
						alignItems="center"
					>
						{datosCards.map((content) => (

							<Cardinv
								titulo={content.titulo}
								icon={content.icon}
								key={content.titulo}
								text={content.text}
								link={content.link}
								page='/howtoinvest'
							/>
						))}
					</Grid>

				</Container>
			</Container>
		</>
	);
}

export default InvestmentMaturity;