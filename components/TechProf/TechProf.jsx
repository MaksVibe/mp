'use client';
import Image from 'next/image';

import Container from '../Container/Container';
import { sprite } from './sprite';
import { Content, Heading, Item, Sprite, Technology,TechStack } from './TechProf.styles';

const TechProf = () => {
	return (
		<>
			<Container>
				<Heading>Technical proficiency</Heading>
			</Container>
			<Content>
				<Container>
					<TechStack>
						{Object.keys(sprite).map((k, i) => (
							<Technology key={i + 1}>
								<Heading>{k}</Heading>
								<Sprite>
									{sprite[k].map(
										(icon, index) =>
											icon && (
												<Item key={index + 1}>
													<Image
														src={icon.src}
														width={120}
														height={120}
														alt={icon.src.slice(1, icon.src.indexOf('.'))}
													/>
												</Item>
											)
									)}
								</Sprite>
							</Technology>
						))}
					</TechStack>
				</Container>
			</Content>
		</>
	);
};

export default TechProf;
