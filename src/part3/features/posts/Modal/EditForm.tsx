import { ChangeEvent, ElementType } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

import Post from "../types/Post";

type Props = {
    post: Post;
    onChangeField: (key: string, value: string | number) => void;
};

const EditForm = ({ post, onChangeField }: Props) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>, key: string, type?: string) => {
        const value = type == "number" ? e.target.valueAsNumber : e.target.value;
        onChangeField(key, value);
    };

    const formItems = [
        { label: "User ID", key: "userId", type: "number" },
        { label: "Title", key: "title", props: { rows: 2, as: "textarea" as ElementType<any> } },
        { label: "Body", key: "body", props: { rows: 3, as: "textarea" as ElementType<any> } },
    ];

    return (
        <form>
            {formItems.map(({ key, label, type, props }) => (
                <FormGroup key={key} className="mb-3" controlId={label}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl
                        type={type || "text"}
                        defaultValue={post[key as keyof Post]}
                        onChange={(e) => onChange(e as ChangeEvent<HTMLInputElement>, key, type)}
                        {...props}
                    />
                </FormGroup>
            ))}
        </form>
    );
};

export default EditForm;
