import { Link } from '@mui/material';

import Text from '../Text';

type TextSectionProps = {
	title?: string;
	texts: (string | undefined)[] | undefined;
	includeLinks?: boolean;
};

const TextSection = ({ title, texts, includeLinks }: TextSectionProps) => (
	// eslint-disable-next-line react/jsx-no-useless-fragment
	<>
		{texts?.[0] && (
			<>
				{title && <Text variant="h5" component="h4" text={title} />}
				{texts.map((text, i) =>
					includeLinks ? (
						<Link sx={{ wordWrap: 'break-word' }} href={text} key={i}>
							{text}
						</Link>
					) : (
						<Text key={i} text={text} />
					)
				)}
			</>
		)}
	</>
);

export default TextSection;
