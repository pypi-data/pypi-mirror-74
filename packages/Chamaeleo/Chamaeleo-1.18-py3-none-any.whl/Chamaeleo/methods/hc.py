"""
Name: Huffman Codec (DNA Storage Code based on Huffman code)

Reference:
Goldman N, Bertone P, Chen S, et al. Towards practical, high-capacity, low-maintenance information storage in synthesized DNA[J]. Nature, 2013, 494(7435): 77.

Coder: HaoLing ZHANG (BGI-Research)[V1], QianLong ZHUANG (BGI-Research)[V1]

Current Version: 1

Function(s):
(1) DNA encoding by Huffman Codec.
(2) DNA decoding by Huffman Codec.
"""
import sys
import re

import Chamaeleo.utils.monitor as monitor
import Chamaeleo.utils.log as log
import Chamaeleo.methods.components.inherent as inherent


# noinspection PyProtectedMember,PyMethodMayBeStatic,PyTypeChecker,PyUnusedLocal
class HC:
    def __init__(self, fixed_huffman=True):
        """
        introduction: The initialization method of Huffman Codec.

        :param fixed_huffman: Declare whether to use the Huffman dictionary in Goldman's paper.
                               In order to reduce the possible loss of function storage, we recommend using this dictionary.
        """
        self.huffman_tree = None
        self.segment_length = 0
        self.fixed_huffman = fixed_huffman
        self.file_size = 0
        self.m = monitor.Monitor()

    # ================================================= encode part ====================================================

    def encode(self, matrix, size, need_log=False):
        """
        introduction: Encode DNA sequences from the data of binary file.

        :param matrix: Generated binary two-dimensional matrix.
                        The data of this matrix contains only 0 or 1 (non-char).
                        Type: int or bit.

        :param size: This refers to file size, to reduce redundant bits when transferring DNA to binary files.
                      Type: int

        :param need_log: show the log.

        :return dna_sequences: The DNA sequence of len(matrix) rows.
                             Type: list(list(char)).
        """
        self.file_size = size

        self.segment_length = len(matrix[0])

        if self.segment_length % 8 != 0:
            temp_matrix = []
            for row in range(len(matrix)):
                temp_matrix.append([0 for col in range(8 - self.segment_length % 8)] + matrix[row])
            matrix = temp_matrix

        self.m.restore()
        if need_log:
            log.output(log.NORMAL, str(__name__), str(sys._getframe().f_code.co_name),
                       "Generate the huffman dictionary.")
        if self.fixed_huffman:
            self._huffman_dict()
        else:
            self._huffman_dict(matrix)

        self.m.restore()
        if need_log:
            log.output(log.NORMAL, str(__name__), str(sys._getframe().f_code.co_name),
                       "Convert matrix to DNA sequence set.")
        dna_sequences = []

        for row in range(len(matrix)):
            if need_log:
                self.m.output(row, len(matrix))
            dna_sequences.append(self._list_to_sequence(self._huffman_compressed(matrix[row])))

        self.m.restore()
        return dna_sequences

    def _huffman_compressed(self, binary_list):
        """
        introduction: Convert binary to ternary, compress and facilitate the use of rotate code

        :param binary_list: One binary list.
                             Type: int or bit.

        :return ternary_list: One int list.
                               Type: List(int).
        """
        ternary_list = []

        for list_index in range(0, len(binary_list), 8):
            current_number = int("".join(list(map(str, binary_list[list_index : list_index + 8]))), 2)
            huffman_code = self.huffman_tree[current_number]
            for code_index in range(len(huffman_code)):
                ternary_list.append(int(huffman_code[code_index]))

        return ternary_list

    def _list_to_sequence(self, one_list):
        """
        introduction: Encode a DNA sequence from one binary list.

        :param one_list: One binary list.
                         Type: int or bit.

        :return dna_sequence: One DNA sequence.
                           Type: List(char).
        """
        last_base, dna_sequence = "A", []
        for col in range(len(one_list)):
            current_base = inherent.rotate_codes.get(last_base)[one_list[col]]
            dna_sequence.append(current_base)
            last_base = current_base

        return dna_sequence

    # ================================================= decode part ====================================================

    def decode(self, dna_sequences, need_log=False):
        """
        introduction: Decode DNA sequences to the data of binary file.

        :param dna_sequences: The DNA sequence of len(matrix) rows.
                            Type: One-dimensional list(string).

        :param need_log: show the log.

        :return matrix: The binary matrix corresponding to the dna sequences.
                         Type: Two-dimensional list(int).

        :return file_size: This refers to file size, to reduce redundant bits when transferring DNA to binary files.
                            Type: int
        """

        self.m.restore()
        if need_log:
            log.output(log.NORMAL, str(__name__), str(sys._getframe().f_code.co_name),
                       "Convert DNA sequences to binary matrix.")

        matrix = []

        for index in range(len(dna_sequences)):
            if need_log:
                self.m.output(index, len(dna_sequences))
            matrix.append(
                self._huffman_decompressed(self._sequence_to_list(dna_sequences[index]))
            )

        if len(matrix[0]) != self.segment_length:
            temp_matrix = []
            for row in range(len(matrix)):
                temp_matrix.append(matrix[row][8 - self.segment_length % 8:])
            matrix = temp_matrix

        self.m.restore()

        return matrix, self.file_size

    def _sequence_to_list(self, dna_sequence):
        """
        introduction: Convert one DNA sequence to one Huffman coding list.

        :param dna_sequence: One DNA sequence.
                           Type: List(char).

        :return one_list: One ternary Huffman coding list.
                           Type: List(int)
        """
        last_base, one_list = "A", []
        for index in range(len(dna_sequence)):
            one_list.append(inherent.rotate_codes.get(last_base).index(dna_sequence[index]))
            last_base = dna_sequence[index]

        return one_list

    def _huffman_decompressed(self, ternary_list):
        """
        introduction: Conversion of ternary Huffman coding to binary coding.

        :param ternary_list: The ternary Huffman coding.

        :return binary_list: The binary list.
                              Type: list(int).
        """
        temp_ternary, binary_list = "", []
        for index in range(len(ternary_list)):
            temp_ternary += str(ternary_list[index])
            if temp_ternary in self.huffman_tree:
                tree_index = self.huffman_tree.index(temp_ternary)
                binary_list += list(map(int, list(str(bin(tree_index))[2:].zfill(8))))
                temp_ternary = ""

        return binary_list

    # ================================================= other part =====================================================

    def _huffman_dict(self, matrix=None):
        """
        introduction: Get the dictionary of Huffman tree.

        :param matrix: Generated binary two-dimensional matrix.
                        The data of this matrix contains only 0 or 1 (non-char).
                        Type: int or bit.
        """
        if matrix is None:
            self.huffman_tree = inherent.goldman_dict
        else:
            self.huffman_tree = self._get_map(matrix, 3)

    def _get_map(self, bit_matrix, size=None, multiple=3):
        """
        introduction: Customize Huffman tree based on the bit matrix.

        :param bit_matrix: Bit matrix, containing only 0,1.
                            Type: Two-dimensional list(int)

        :param size: File size corresponding to the matrix.

        :param multiple: Number of branches constructed (decimal semi-octets).

        :return tree: Byte-based (256) Huffman tree.
        """

        if size is None:
            size = len(bit_matrix) * len(bit_matrix[0])

        # Replace the bit matrix with one-dimensional decimal byte list
        decimal_list = self._get_decimal_list(bit_matrix, size)

        # Store elements and their weights, their codes
        weight, code = {}, {}
        # Recorder, prepare for the following screening of valid keys
        _node = lambda i: "_" + str(i).zfill(3)
        for one_byte in decimal_list:
            # Create weight values for each element
            if _node(one_byte) in weight:
                weight[_node(one_byte)] += 1
            else:
                # Set the initial value of the code
                code[_node(one_byte)] = ""
                weight[_node(one_byte)] = 1

        for one_byte in range(1, multiple - 1):
            # Add impossible elements to ensure normal combination and close as one element
            if (len(weight) - 1) % (multiple - 1) == 0:
                break
            else:
                weight["_" * one_byte] = 0
        weight_list = list(weight.items())

        for index in range(0, (len(weight) - 1) // (multiple - 1)):
            weight_list = sorted(weight_list, key=lambda x: x[0])
            weight_list = sorted(weight_list, key=lambda x: x[1])
            # Combine the previous terms into one term
            item = str(index).zfill(3)
            weight = 0
            # Add Huffman coding and form new combinations
            for branch in range(0, multiple):
                item += weight_list[branch][0]
                weight += weight_list[branch][1]
                # Add headers to each item of the previous items.
                for index_item in re.findall(r"_\d{3}", weight_list[branch][0]):
                    code[index_item] = str(multiple - branch - 1) + code[index_item]
            new = [(item, weight)]
            weight_list = weight_list[multiple:] + new

        dictionary = dict([int(key[1:]), value] for key, value in code.items())

        tree = []
        for index in range(256):
            tree.append(dictionary.get(index))

        return tree

    def _get_decimal_list(self, bit_matrix, size):
        """
        introduction: Decimal list generated by the bit matrix.

        :param bit_matrix: Bit matrix, containing only 0,1.
                            Type: Two-dimensional list(int)

        :param size: File size corresponding to the matrix.

        :return decimal_list: Decimal list.
                              Type: One-dimensional list(int)
        """
        bit_index, temp_byte, decimal_list = 0, 0, []
        for row in range(len(bit_matrix)):
            for col in range(len(bit_matrix[0])):
                bit_index += 1
                temp_byte *= 2
                temp_byte += bit_matrix[row][col]
                if bit_index == 8:
                    if size >= 0:
                        decimal_list.append(int(temp_byte))
                        size -= 1
                    bit_index, temp_byte = 0, 0

        return decimal_list
