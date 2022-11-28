/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../db/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { query } = req.query;

	const data = await prisma.shortLink.findFirst({
		where: {
			slug: {
				equals: query.id,
			},
		},
	});
};
