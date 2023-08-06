# -*- coding:utf-8 -*-
# CREATED BY: Li Wang
# CREATED ON:2020/4/30 上午11:56
# LAST MODIFIED ON:
# AIM: 对划分好的句子长短句做处理
from sentence_spliter import spliter_simple
import re
from typing import List
from cerberus import Validator

class Spliter:
    def __init__(self, **options):
        schema = {'language':{'type':'string'},
                  'remove_blank':{'type':'boolean'},
                  'long_short_sent_handle':{'type':'boolean'},
                  'max_length':{'type':'integer'},
                  'min_length':{'type':'integer'},
                  'hard_max_length':{'type':'integer'}}
        v = Validator(schema)
        # params = options
        if v.validate(options):
            if options['language'].lower() == 'zh':
                self.spliter = spliter_simple.Spliter()
                self.flag = 'zh'
            elif options['language'].lower() == 'en':
                self.spliter = spliter_simple.Spliter()
                self.flag = 'en'
            else:
                raise Exception("option > language must be one of the following value ['zh', 'en']")
            self.remove_blank_on = options['remove_blank']
            # print(self.remove_blank_on)
            self.long_short_sent_handle = options['long_short_sent_handle']
            self.max_length = options['max_length']
            self.min_length = options['min_length']
            self.hard_max_length = options['hard_max_length']
            self.long_filter = re.compile('([.?!。？！，,])')


    def cut_to_sentences(self, text):

        if self.remove_blank_on and self.flag == 'zh':
            text = re.sub(r'\s+', '', text)  # 先不考虑中英文混合情况,去掉空格
            all_sentence = self.to_sentence(text)
        if self.flag == 'en':
            all_sentence = self.to_sentence(text)
            return all_sentence
        elif self.flag == 'zh':
            if self.long_short_sent_handle:
                return self.refine(all_sentence)
            else:
                return all_sentence

    # - step 1:划分句子
    def to_sentence(self, paragraph) -> [str]:
        sentences = self.spliter.cut_to_sentences(paragraph)
        return sentences

    def refine_single_short(self, sentence: str) -> [str]:
        pass

    # - step 2:对过长过短句子做处理
    # def refine(self, all_sentence: List[str]) -> [str]:
    #     out = []
    #     i = 0
    #     length = len(all_sentence)
    #     end_sntnc = ''
    #     while i < length:
    #         if not end_sntnc:
    #             sent = all_sentence[i]
    #         else:
    #             sent = end_sntnc + all_sentence[i]
    #         if self.is_valid_sntnc(sent):
    #             out.append(sent)
    #             end_sntnc = ''
    #         else:
    #             if len(sent) > self.max_length:
    #                 new_sents = self.refine_single(sentence=sent)
    #                 # long_flag = 1
    #             else:
    #                 new_sents = [sent]
    #             out.extend(new_sents)
    #             end_sntnc = ''
    #             if len(out[-1]) < self.min_length: #self.is_valid_sntnc(out[-1]):
    #                 # if long_flag == 1:
    #                 #     i += 1
    #                 #     continue
    #                 end_sntnc = out[-1]
    #                 out = out[0:-1]#out清空
    #         i += 1
    #     if end_sntnc:
    #         out.append(end_sntnc)
    #     return out

    def refine(self, all_sentence: List[str]) -> [str]:
        out = []
        i = 0
        length = len(all_sentence)
        end_sntnc = ''
        while i < length:
            if not end_sntnc:
                sent = all_sentence[i]
            else:
                if len(end_sntnc + all_sentence[i]) > self.max_length:
                    sent = all_sentence[i]
                else:
                    out = out[0:-1]
                    sent = end_sntnc + all_sentence[i]
            if self.is_valid_sntnc(sent):
                out.append(sent)
                end_sntnc = ''
            else:
                if len(sent) > self.max_length:
                    new_sents = self.refine_single(sentence=sent)
                else:
                    new_sents = [sent]
                out.extend(new_sents)
                end_sntnc = ''
                if len(out[-1]) < self.min_length: #self.is_valid_sntnc(out[-1]):
                    end_sntnc = out[-1]
            i += 1
        # if end_sntnc:
        #     out.append(end_sntnc)
        return out

    def is_valid_sntnc(self, sentence: str):
        '''
        判断是否满足正常句子，长度在min_length到max_length之间
        :param sentence:
        :return:
        '''
        if self.min_length < len(sentence) < self.max_length:
            return True
        else:
            return False

    def refine_single(self, sentence: str) -> List[str]:
        '''
        :param sentence:
        :return:
        '''
        '管我叫克莱门，想想'
        pattern_w = re.compile('([?\!\.…;？！。……；,,，"＂＇\'])')
        out = ['']
        pre_spilt_id = 0
        acc_range = 0
        for i, word in enumerate(sentence):
            if not (i > 0 and pattern_w.match(sentence[i - 1])):
                out[-1] = out[-1] + word
            else:
                if len(out[-1]) <= self.max_length:
                    out[-1] = out[-1] + word
                    pre_spilt_id = i
            # -- run hard max -- #
            if len(out[-1]) > self.hard_max_length:
                if pre_spilt_id <= 0:
                    pre_spilt_id = self.hard_max_length + acc_range
                range = len(out[-1]) - i + pre_spilt_id - 1
                acc_range += range
                # ---- 优先　hard cut ----- #
                # if range <= self.min_length:
                #     range = self.hard_max_length
                #     pre_spilt_id = i
                shorter = out[-1][0: range]
                sub = sentence[pre_spilt_id:i + 1]
                out[-1] = shorter
                out.append(sub)
                pre_spilt_id = 0
        return out

    def remove_blank(self, sentence: str) -> str:
        if not self.remove_blank_on:
            return sentence
        else:
            pass
    # -- 中英文混合情况 -- #
    # def is_zh(self, _char: str) -> bool:
    #     if '\u4e00' <= _char <= '\u9fa5':
    #         return True
    #     return False
    #
    # def len(self, sentence:str) -> bool:
    #     '''
    #     只考虑英语和中文情况
    #     :param sentence:
    #     :return:
    #     '''
    #     cnt = 0
    #     nzh_flag = 0
    #     for char in sentence:
    #         if self.is_zh(char):
    #             cnt += 1
    #             nzh_flag = 0
    #         else:
    #             nzh_flag
    #
    # def is_zh_sntnc(self, sentence: str) -> bool:
    #     length = len(sentence)
    #     count = None
    #     for c in sentence:
    #         pass
if __name__ == '__main__':
    options = {
        'language': 'zh',
        'long_short_sent_handle': True,
        'max_length': 20,
        'min_length': 3,
        'hard_max_length': 20,
        'remove_blank': True
    }
    spliter = Spliter(**options)
    text = '旁听席．座无虚席,但法庭里并未显现出乡间谋杀案庭审过程中常见的狂欢氛围。'
    cut_sent_actual = spliter.cut_to_sentences(text=text)
    print(cut_sent_actual)