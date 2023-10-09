import { ThumbsUp, Trash } from "phosphor-react"
import styles from "../comment/Comment.module.css"
import { Avatar } from "../avatar/Avatar"

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Letimberg Cavalcante</strong>
                            <time
                                title="06 de Outubro às 13:42h"
                                dateTime="2023-05-11 11:31:30"
                            >
                                Cercar de 1h atrás.
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
