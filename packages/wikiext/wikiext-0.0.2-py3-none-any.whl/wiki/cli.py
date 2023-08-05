import argparse

import nlp2

from wiki import *


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--lang", type=str, default='zhwiki',
                        help="default:zhwiki, from https://dumps.wikimedia.org/backup-index-bydb.html")
    parser.add_argument("--dump", type=str, nargs='+', default=['all'], help="select what to extract",
                        choices=['redirect_pair', 'langlink', 'category', 'articles', 'all'])
    parser.add_argument("--savedir", type=str, default="dump_result/", help="save dir, default /dump_result")
    parser.add_argument("--type", type=str, default="csv", choices=['csv', 'dict'])
    parser.add_argument("--s2t", action='store_true')

    arg = parser.parse_args()
    savedir = nlp2.get_dir_with_notexist_create(arg.savedir)
    wiki = WikiDump(language_source=arg.lang, s2t=arg.s2t)
    if 'redirect_pair' in arg.dump or 'all' in arg.dump:
        wiki.dump_redirect_pair(os.path.join(savedir, arg.lang + '_redirect.' + arg.type), type=arg.type)
    if 'langlink' in arg.dump or 'all' in arg.dump:
        wiki.dump_langlink(os.path.join(savedir, arg.lang + '_translate.' + arg.type), type=arg.type)
    if 'category' in arg.dump or 'all' in arg.dump:
        wiki.dump_category(os.path.join(savedir, arg.lang + '_categories.' + arg.type), type=arg.type)
    if 'articles' in arg.dump or 'all' in arg.dump:
        wiki.dump_articles(os.path.join(savedir, arg.lang + '_wiki_article.' + arg.type), type=arg.type)


if __name__ == "__main__":
    main()
