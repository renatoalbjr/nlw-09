import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
    log: ['query']
});

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return res.json(games)
})

app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            yearsPlaying: true,
            weekDays: true,
            hoursStart: true,
            hoursEnd: true,
            useVoiceChannel: true,
        },
        where: {
            gameId,
        },
        orderBy:{
            createdAt: 'desc',
        }
    })
    return res.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
        }
    }));
})

app.post('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id
    const ad = {
        gameId,
        name: req.body.name,
        discord: req.body.discord,
        yearsPlaying: req.body.yearsPlaying,
        weekDays: req.body.weekDays.join(','),
        hoursStart: req.body.hoursStart,
        hoursEnd: req.body.hoursEnd,
        useVoiceChannel: req.body.useVoiceChannel,
    }
    const createdAd = await prisma.ad.create({
        data: ad
    })
    if(createdAd) return res.status(201).json(createdAd)
    return res.status(400).json()
})

app.get('/ads', async (req, res) => {
    const ads = await prisma.ad.findMany({
        select: {
            id : true,
            gameId : true,
            name : true,
            yearsPlaying : true,
            weekDays : true,
            hoursStart : true,
            hoursEnd : true,
            useVoiceChannel : true,
            createdAt : true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return res.json(ads)
})

// app.get('/ads/:id', async (req, res) => {
//     return res.json([])
// })

app.get('/ads/:id/discord', async (req, res) => {
    const id = req.params.id
    const ad = await prisma.ad.findUniqueOrThrow({
        where: {
            id,
        },
        select: {
            discord: true,
        }
    })
    return res.json({discord: ad.discord})
})

app.listen(3333)