import Task from "../database/models/taskModel";
import { Request, Response } from "express";

class TaskController {

    async create (req: Request, res: Response): Promise<Response>{
        try {

            const {title} = req.body
            const task = await Task.findOne({ title });

            if (task) {
                return res.json({ msg: "task already exists", success: false });
            }

            const newTask = await Task.create(req.body);


            return res.status(200).json(newTask);

        } catch (error) {
            return res.status(500).json({ error: "internal server error." });
        }
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        try {

            const data = await Task.find();

            return res.status(200).send(data);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "internal server error." });
        }
    }

    async get(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        try {

            const task = await Task.findById(id);

            if (!task?.title) {
                return res.status(404).json("not found");
            }

            return res.status(200).json(task);

        } catch (error) {
            return res.status(500).json({ error: "internal server error." });
        }
    }

    async getByColor(req: Request, res: Response): Promise<Response> {

        const {color} = req.params;

        console.log(color);

        try {
            const data = await Task.find({color: color});

            return res.status(200).send(data);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "internal server error." });
        }
    }


    async update(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        try {

            const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
                new: true,
            });

            return res.status(200).json(task);

        } catch (error) {
            return res.status(500).json({ error: "internal server error." });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        try {

            const task = await Task.findOneAndDelete({ _id: id })
            return res.status(200).json(task);

        } catch (error) {
            return res.status(500).json({ error: "internal server error." });
        }
    }
}

export default new TaskController();